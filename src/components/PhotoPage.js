// test but doesnt work properly //png to jpeg problems
import React, { Component } from 'react';
// import loadImage from 'blueimp-load-image';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Loading from './Loading';
import backButton from '../images/left-arrow.svg';
import config from '../custom/config';
import './PhotoPage.scss';

class PhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: '',
      open: false,
      opendialogtext: false,
      message: '',
      value: '',
      sending: false
    };

    this.base64 = null;
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  openDialog = (message) => {
    this.setState({
      sending: false,
      open: true,
      message
    });
  }

  closeDialog = () => {
    this.setState({ open: false });
    if (this.state.message === 'Failed to upload. Please try again!') {
      this.loadImage();
    } else {
      this.closePage();
    }
  }

  openDialogText = () => {
    this.setState({ opendialogtext: true });
  }

  closeDialogText = () => {
    this.setState({ opendialogtext: false });
  }

  sendFile = async () => {
    let data = {}
    const text =  this.state.value;
    const { location } = this.props;
    data.base64 = this.base64;
    console.log(data);
    if (text !== '') {
      data['text'] = text;
      if (location) {
        data['latitude'] = location.latitude;
        data['longitude'] = location.longitude;
      }
      this.setState({ sending: true });
      try {
        const res = await config.uploadPhoto(data);
        console.log(res);
        this.openDialog("Photo was uploaded successfully");
      } catch (e) {
        this.openDialog(e.message || e);
      }
    } else {
      this.openDialogText();
    }
  }

  closePage = () => {
    this.props.closePage();
  }

  calculateNewSize = (height,width,size,threshold = 0.5) => {
    const image_actual_size = size;
    // const image_actual_size = this.props.file.size;
    const image_threshold = threshold * 1024 * 1024; // = int * MB
    const wtf_ratio = this.props.file.size / size;
    const ratio_th_ac = image_threshold / image_actual_size;
    const ratio_max_min = Math.max(height,width) / Math.min(height,width);

    console.log('ratio_th_ac',ratio_th_ac,'ratio_max_min',ratio_max_min);
    console.log('image_actual_size',image_actual_size,'image_threshold',Math.floor(image_threshold));

    if (image_actual_size > image_threshold){

      // x = Math.sqrt(ratio_th_ac) * Math.min(height,width);
      const x = Math.floor( Math.sqrt(ratio_th_ac) * Math.min(height,width) );

      // x = Math.floor( Math.sqrt(ratio_th_ac) * Math.min(height,width) - wtf_ratio * Math.min(height,width)  );

      // y = ratio_max_min * x;
      const y = Math.floor( ratio_max_min * x );


      // for (let i = 0; i<image_actual_size; i++){
      //   height()
      // }

      if(width<height){
        height = y;
        width = x;
      }
      else{
        height = x;
        width = y;
      }
      // height = height/2;
      // width = width/2;
      console.log('x',height,'y',width);

    }
    return {height,width};

  }

  resize = (img,height,width,size) =>{
    const result = this.calculateNewSize(height,width,size,0.5);
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    // const factor = 4;

    canvas.height = result.height;
    canvas.width = result.width;

    ctx2.drawImage(img, 0, 0, result.width, result.height);

    const style = ctx2.canvas.style;
    if(width<height){
      style.width = 'auto';
      style.maxHeight = '100%';
      style.maxWidth = '100%';
    }
    else {
      style.height = 'auto';
      style.maxWidth = '100%';
      style.maxHeight = '100%';
    }

    const jpeg = 1;
    ctx2.canvas.toBlob((blob) => {
        const file = new File([blob], 'fileName', {
            type: 'image/jpeg',
            lastModified: Date.now()
        });
        console.log('reduced',file.size,blob);
    }, 'image/jpeg', jpeg);

  }

  loadImage = () => {

    const reader = new FileReader();
    reader.readAsDataURL(this.props.file);
    console.log('init',this.props.file.size);
    reader.onload = event => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.getElementById('canvas');
          const ctx = canvas.getContext('2d');

          let width = img.naturalWidth;
          let height = img.naturalHeight;
          console.log('x:',height,'y:',width);

          canvas.height = height;
          canvas.width = width;

          const style = ctx.canvas.style;
          // console.log(style);
          ctx.drawImage(img, 0, 0, width, height);

          if(width<height){
            style.width = 'auto';
            style.maxHeight = '100%';
            style.maxWidth = '100%';
          }
          else {
            style.height = 'auto';
            style.maxWidth = '100%';
            style.maxHeight = '100%';
          }
          const jpeg = 1;
          ctx.canvas.toBlob((blob) => {
              const file = new File([blob], 'fileName', {
                  type: 'image/jpeg',
                  lastModified: Date.now()
              });
              console.log('original',file.size,blob);
              this.resize(img,height,width,file.size);
          }, 'image/jpeg',jpeg );

          // const test = ctx.canvas.toDataURL('image/jpeg',1.0).split(",")[1]
          const x = ctx.canvas.toDataURL('image/jpeg',1.0).split(",")[1];
          // console.log(x);

        }
    }

  }

  componentDidMount() {
    this.loadImage();

    window.gtag('event', 'page_view', {
      'event_category': 'view',
      'event_label': 'PhotoPage'
    });
  }

  render() {
    return (
      this.state.sending ?
        <Loading />
      :
        <div className='geovation-photos'>
          <div className='headline'>
            <Button onClick={this.closePage}>
              <img className='buttonback' src={backButton} alt=''/>
            </Button>
            <div>PhotoPage</div>
          </div>
          <div className='entertext'>
            Enter some text:
            <input type='text' className='inputtext' value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className='picture'>
            <canvas style={{display:'none'}}  id='canvas'></canvas >
            <canvas style={{display:'block'}} id='canvas2'></canvas>
          </div>
          <div className='buttonwrapper'>
            <Button className='sendbutton' onClick={this.sendFile}>
              Send Photo
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
              <Button onClick={this.closeDialog} color='primary'>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.opendialogtext}
            onClose={this.closeDialogText}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                Please enter some text
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeDialogText} color='primary'>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    );
  }
}

export default PhotoPage;
