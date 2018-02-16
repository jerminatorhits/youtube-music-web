import React, { Component } from 'react';
import Header from './js/components/Header';
import ResultContainer from './js/components/ResultContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ResultContainer />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
