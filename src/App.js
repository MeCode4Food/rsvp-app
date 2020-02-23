import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>My Name is Shane</div>
        <div>I like cocaine</div>
        <div>Go work by train</div>
        <div>Sometimes by plane</div>
        <p>
          RSVP S3
        </p>
        <div className="acknowledgements">
          CK, Shane, Lucie
        </div>
      </header>
    </div>
  );
}

export default App;
