import React, { Component } from 'react';
import logo from './logo.svg';
import img1 from './image1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Mr. Pogi ng Taytay Rizal! :)          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={img1} className="App-img" alt="img" />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
