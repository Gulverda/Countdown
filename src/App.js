import React, { Component } from 'react';
import CountdownTimer from './layout/CountdownTimer';
import './App.css'

class App extends Component {
  handleCountdownComplete = () => {
    // Handle what happens when the countdown is complete.
    alert('Countdown is complete!');
  };

  render() {

    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        <CountdownTimer targetDate="2023-09-31T00:00:00Z" />
      </div>
    );
  }
}

export default App;
