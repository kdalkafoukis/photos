import React from 'react';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/app';
import 'firebase/auth';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// TODO: change theme: https://github.com/firebase/firebaseui-web-react/tree/master/dist

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
});

class LoginFirebase extends React.Component {
  /**
   *
   * @param props are {handleClose}
   */
  constructor(props) {
    super(props);
    this.uiConfig = {
      // signInFlow: 'redirect',
      signInSuccessUrl: '/',
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FirebaseAuth
          style={{width:'100%'}}
          // uiCallback={ui => ui.disableAutoSignIn()}
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}

export default withStyles(styles)(LoginFirebase);
