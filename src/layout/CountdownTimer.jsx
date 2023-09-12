import React, { Component } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Countdown = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetDate: new Date(props.targetDate),
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(this.updateTimer, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimer = () => {
    const currentTime = new Date();
    const timeDifference = this.state.targetDate - currentTime;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    } else {
      clearInterval(this.state.intervalId);
    }
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <TimerContainer>
        <Countdown>
          Time Remaining: {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
        </Countdown>
      </TimerContainer>
    );
  }
}

export default CountdownTimer;
