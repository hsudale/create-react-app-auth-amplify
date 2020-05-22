import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
Amplify.configure(aws_exports);

//export default function FormPropsTextFields() {
class App extends Component {
  render() {
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField required id="fname" label="First Name: " defaultValue="" />
        <br/>
        <TextField required id="lname" label="Last Name: " defaultValue="" />
        <br/>
        <TextField required id="email" label="Send-to Email: " defaultValue="" />
        <br/>
        <br/>
        <br/>
        <br/>
        <TextField
          id="message"
          label="Message: "
          multiline
          rows={5}
          defaultValue=" "
          variant="outlined"
        />        <br/>

        <br/>
        <br/>
        <Butt        <br/>
        <br/>
        <br/>
on 
            variant="contained" 
        <br/>
        <br/>
            type="submit"
            size="large" 
            color="primary" >
            Submit
        </Button>
      </div>
    </form>
  );
  }
}

export default withAuthenticator(App, true);
