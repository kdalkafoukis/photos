import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loadImage from 'blueimp-load-image';
import dms2dec from 'dms2dec';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';

import config from '../custom/config';
import { gtagEvent } from '../gtag.js';
import './PhotoPage.scss';
import dbFirebase from '../dbFirebase';
import { isIphoneWithNotchAndCordova } from '../utils';


import PageWrapper from './PageWrapper';

const emptyState = {
  imgSrc: null,
  imgExif: null,
  imgIptc: null,
  open: false,
  message: '',
  field: '',
  sending: false,
  error: !''.match(config.PHOTO_FIELD.regexValidation),
  openSnackbar:true,
  dialogText:`You have no network,the photo will finish uploading when the
    network is back`,
  control: false
};

const styles = theme => ({
  cssUnderline: {
    '&:after': {
      borderBottomColor: theme.palette.secondary.main,
    },
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  button: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    margin: theme.spacing.unit * 1.5,
  },
  notchTop: {
    paddingTop: isIphoneWithNotchAndCordova() ? 'env(safe-area-inset-top)' : 0
  },
  notchBottom: {
    paddingBottom: isIphoneWithNotchAndCordova() ? 'env(safe-area-inset-bottom)' : 0
  },
  snackbar: {
    maxHeight: 8,
    fontSize: 10
    // backgroundColor:theme.palette.primary.main,
    // color:theme.palette.secondary.main
  }
});

class PhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {...emptyState};
    this.dialogCloseCallback = null;
  }


  resetState = () => {
    this.setState(emptyState);
  }

  handleChange = (event) => {
    this.setState({
      error: !event.target.value.match(config.PHOTO_FIELD.regexValidation),
      field: event.target.value
    });
  }

  openDialog = (message, fn) => {
    this.setState({
      open: true,
      message
    });

    this.dialogCloseCallback = fn;
  }

  closeDialog = () => {
    this.dialogCloseCallback ? this.dialogCloseCallback() : this.setState({ open: false });
  }

  /**
   * Given an exif object, return the coordinates {latitude, longitude} or undefined if an error occurs
   */
  getLocationFromExifMetadata = exif => {

    let location = undefined;

    try {
      // https://www.npmjs.com/package/dms2dec
      const lat = this.state.imgExif.GPSLatitude.split(",").map(Number);
      const latRef = this.state.imgExif.GPSLatitudeRef;
      const lon = this.state.imgExif.GPSLongitude.split(",").map(Number);
      const lonRef = this.state.imgExif.GPSLongitudeRef;

      const latLon = dms2dec(lat, latRef, lon, lonRef);
      location = {
        latitude: latLon[0],
        longitude: latLon[1]
      };

    } catch (e) {
      console.debug(`Error extracting GPS from file; ${e}`);
    }

    return location;
  }

  sendFile = async () => {
    gtagEvent('Upload', 'Photo');

    // try getting the location from the photo first
    const photoLocation = this.getLocationFromExifMetadata(this.state.imgExif);

    if (!photoLocation && !this.props.gpsLocation.online) {
      this.openDialog("Could not get the location yet. You won't be able to upload an image.");
    } else if (!this.props.online) {
      this.openDialog("Can't Connect to our servers. You won't be able to upload an image.");
    } else if (!this.state.imgSrc) {
      this.openDialog("No picture is selected. Please choose a picture.");
    } else {

      const data = {
        ...this.props.gpsLocation,
        ...photoLocation,
        base64: this.state.imgSrc.split(",")[1]
      };

      if (this.state.field !== '') {
        data.field = this.state.field;
        this.setState({ sending: true });

        try {
          const res = await dbFirebase.uploadPhoto(data);
          this.handleClose();
          this.props.openDialog("Photo was uploaded successfully. It will be reviewed by our moderation team.");
        } catch (e) {
          this.props.openDialog(e.message || e);
        }
      } else {
        this.openDialog("Please enter some text");
      }

    }
  }

  loadImage = () => {
    let imgExif = null;
    let imgIptc = null;

    // https://github.com/blueimp/JavaScript-Load-Image#meta-data-parsing
    loadImage.parseMetaData(
      this.props.file, data => {
        imgExif = data.exif ? data.exif.getAll() : imgExif;
        imgIptc = data.iptc ? data.iptc.getAll() : imgIptc;
      },
      {
        maxMetaDataSize: 262144,
        disableImageHead: false
      }
    );

    loadImage(
      this.props.file, (img) =>{
        const imgSrc = img.toDataURL("image/jpeg");
        this.setState({imgSrc, imgExif, imgIptc});
      },
      {
        orientation: true,
        maxWidth: config.MAX_IMAGE_SIZE,
        maxHeight: config.MAX_IMAGE_SIZE
      }
    );
  }

  retakePhoto = () => {
    gtagEvent('Retake Photo', 'Photo');
    this.resetState();
    this.props.handlePhotoClick();
  }

  handleClosePhotoPage = () => {
    this.resetState();
    this.props.handleClose(); // go to the map
  };

  handleCloseButton = () => {
    gtagEvent('Postpone upload', 'Photo');
    this.handleClosePhotoPage();
  };

  handleClose = () => {
    this.setState({ sending:false });
  }



  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.file !== this.props.file) {
      this.loadImage();
    }
    if ( (prevProps.online !== this.props.online) && this.state.sending) {
      this.openDialog("Can't Connect to our servers. When you connect upload will resume");
      this.setState({ sending : false , control: true});
    }

    if ( (prevProps.online !== this.props.online) && !this.state.sending  && this.state.control=== true ){
      this.setState({
        sending : true,
        control: false
      });
    }

  }

  render() {
    const { classes, label } = this.props;
    return (
      <div className='geovation-photos'>
        <PageWrapper label={label} handleClose={this.props.handleClose}>
          <div className='text-field-wrapper'>
            <Typography className='typography1'>
              {config.PHOTO_FIELD.title}
            </Typography>

            <TextField
              id="standard-name"
              type={config.PHOTO_FIELD.type}
              required={true}
              placeholder={config.PHOTO_FIELD.placeholder}
              className='text-field'
              value={this.state.field}
              onChange={this.handleChange}
              error= {this.state.error}
              InputProps={Object.assign({
                className: classes.cssUnderline
              }, config.PHOTO_FIELD.inputProps)}
            />

          </div>

          <div className='picture'>
           <img src={this.state.imgSrc} alt={""}/>
          </div>

          <div className={classes.button}>
            <Button variant="outlined" fullWidth={true} onClick={this.retakePhoto}>
              Retake
            </Button>
          </div>

          <div className={classes.button}>
            <Button disabled={this.state.error}
              variant="contained" color="secondary" fullWidth={true} onClick={this.sendFile}>
              Upload
            </Button>
          </div>

          <Dialog
            open={this.state.open}
            onClose={this.closeDialog}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeDialog} color='secondary'>
                Ok
              </Button>
            </DialogActions>
          </Dialog>

          <Snackbar
            open={this.state.sending}
            anchorOrigin={{ horizontal:'center', vertical:'top' }}
          >
          <SnackbarContent
            className={classes.snackbar}

              message={
                <div style={{display:'flex'}}>
                  <CircularProgress
                    color='secondary'
                    size={10}
                    thickness={6}/>
                  <div className={classes.snackbarMessage} style={{paddingLeft:20}}>
                    The photo is uploading ...
                  </div>
                </div>
              }
            />
          </Snackbar>

        </PageWrapper>
      </div>
    );
  }
}

PhotoPage.propTypes = {
  gpsLocation: PropTypes.object.isRequired,
  online: PropTypes.bool.isRequired,
  file: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  handlePhotoClick: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(PhotoPage);
