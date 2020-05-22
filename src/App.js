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
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/src/sendemail.js', {
      method: 'POST',
      body: data,
    });
  } 
  
  render() {
  return (
    <center><p>-- Fill Form To Email Other --</p><br/>
    <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
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
          fullWidth="1"
          multiline
          rows={5}
          defaultValue=" "
          variant="outlined"/>
        <Button 
            variant="contained" 
            type="submit"
            size="large" 
            color="primary" >
            SEND
        </Button>
      </div>
    </form>
    </center>
  );
  }
}

//export default withAuthenticator(App, true);
export default App;
