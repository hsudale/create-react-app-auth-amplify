import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//class App extends Component {
//  render() {
//    return (
//    );
//  }
//}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

mySubmitHandler = (event) => {
  event.preventDefault();
  let age = this.state.age;
  //if (!Number(age)) {
  //  alert("Your age must be a number");
  //}
}

myChangeHandler = (event) => {
  let nam = event.target.name;
  let val = event.target.value;
  this.setState({[nam]: val});
}

//export default function FormPropsTextFields() {
class App extends Component {
  render() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off"
          onSubmit={this.mySubmitHandler}>
      <div>
        <TextField required id="fname" label="First Name: " defaultValue="" />
        <TextField required id="lname" label="Last Name: " defaultValue="" />
        <TextField required id="email" label="Send-to Email: " defaultValue="" />
        <br/>
        <br/>
        <TextField
          id="message"
          label="Message: "
          multiline
          rows={5}
          defaultValue=" "
          variant="outlined"
        />
        <br/>
        <br/>
        <Button 
            variant="contained" 
            type="submit"
            size="large" 
            color="primary" 
            className={classes.margin}>
            Submit
        </Button>
      </div>
    </form>
  );
  }
}

export default withAuthenticator(App, true);
