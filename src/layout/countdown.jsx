import React, { Component } from 'react';
import CountdownTimer from './CountdownTimer';

class App extends Component {
  handleCountdownComplete = () => {
    // Handle what happens when the countdown is complete.
    alert('Countdown is complete!');
  };

  render() {
    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        <CountdownTimer initialSeconds={60} onComplete={this.handleCountdownComplete} />
      </div>
    );
  }
}

export default App;
