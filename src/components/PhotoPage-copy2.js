// resize the canvas - on the background
import React, { Component } from 'react';
import loadImage from 'blueimp-load-image';
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

  calculateNewSize = (height,width,threshold = 0.5) => {
    let ratio_th_ac,ratio_max_min,x,y;

    const image_actual_size = this.props.file.size;
    const image_threshold = threshold * 1024 * 1024; // = int * MB

    ratio_th_ac = image_threshold / image_actual_size;
    ratio_max_min = Math.max(height,width)/Math.min(height,width);


    const child = document.getElementById('picture')
    child.removeChild(child.childNodes[0])


    // console.log('ratio_th_ac',ratio_th_ac,'ratio_max_min',ratio_max_min);
    // console.log('image_actual_size',image_actual_size,'image_threshold',Math.floor(image_threshold* 1024 * 1024));

    if (image_actual_size > image_threshold){
      x = Math.floor( Math.sqrt(ratio_th_ac) * Math.min(height,width) );
      y = Math.floor( ratio_max_min * x );
      // TODO: calculate the scale factor for resizing the image
      console.log('x',x,'y',y);

      if(width<height){
        height = y;
        width = x;
      }
      else{
        height = x;
        width = y;
      }

    }
    return {height,width};

  }

  resize = (img,height,width) =>{
    const canvas = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');
    const factor = 4;

    canvas.height = height/factor;
    canvas.width = width/factor;

    ctx2.drawImage(img, 0, 0, width/factor, height/factor);

    if(width<height){
      ctx2.canvas.style.width = 'auto';
      ctx2.canvas.style.maxHeight = '100%';
      ctx2.canvas.style.maxWidth = '100%';
    }
    else {
      ctx2.canvas.style.height = 'auto';
      ctx2.canvas.style.maxWidth = '100%';
      ctx2.canvas.style.maxHeight = '100%';
    }

    ctx2.canvas.toBlob((blob) => {
        const file = new File([blob], 'fileName', {
            type: 'image/jpeg',
            lastModified: Date.now()
        });
        console.log('reduced',file.size);
    }, 'image/jpeg', 0.9);
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


          canvas.height = height;
          canvas.width = width;

          console.log(ctx.canvas.style);
          ctx.drawImage(img, 0, 0, width, height);
          if(width<height){
            ctx.canvas.style.width = 'auto';
            ctx.canvas.style.maxHeight = '100%';
            ctx.canvas.style.maxWidth = '100%';
          }
          else {
            ctx.canvas.style.height = 'auto';
            ctx.canvas.style.maxWidth = '100%';
            ctx.canvas.style.maxHeight = '100%';
          }
          ctx.canvas.toBlob((blob) => {
              const file = new File([blob], 'fileName', {
                  type: 'image/jpeg',
                  lastModified: Date.now()
              });
              console.log('original',file.size);
          }, 'image/jpeg', 0.9);

          const test = ctx.canvas.toDataURL('image/jpeg',1.0).split(",")[1]
          this.resize(img,height,width);
          // second technick check if the file size of test is < threshold.
          // call recursively the test with different jpeg quality like 0.5 step
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
            <canvas style={{display:'block'}}  id='canvas'></canvas >
            <canvas style={{display:'none'}} id='canvas2'></canvas>
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
