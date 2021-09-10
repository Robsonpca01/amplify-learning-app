import React from 'react';
import './App.css';
import Amplify from 'aws-amplify'
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react"
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut/>
        <h2> Content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
