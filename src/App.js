import React, { Component } from 'react';
//import logo from './logo.svg';
import {SearchForm } from './SearchForm.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchForm />
        </header>
      </div>
    );
  }
}

export default App;
