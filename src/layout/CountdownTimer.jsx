import React, { Component } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%; /* Make it take the full width */
  margin-top: 20px; /* Add some spacing */
`;

const Countdown = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow countdown items to wrap on smaller screens */
  justify-content: space-around;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 45px;
  width: 100%; /* Make it take the full width */
`;

const TimeCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%; /* Set a percentage width for responsiveness */
  max-width: 200px; /* Limit the maximum width */
  height: 200px;
  border-radius: 22px;
  background: #080F1A;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin: 10px; /* Add some margin for spacing between items */

  @media (max-width: 768px) {
    width: 90%; /* Adjust the width for smaller screens */
  }
`;

const TimeTitle = styled.p`
  color: #A5DEFF;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
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
          <TimeCont>
            {days} 
            <TimeTitle>days</TimeTitle>
          </TimeCont>
          
          <TimeCont>
            {hours}
            <TimeTitle>hours</TimeTitle>
          </TimeCont>
          
          <TimeCont>
            {minutes}
            <TimeTitle>minutes</TimeTitle>
          </TimeCont>
          
          <TimeCont>
            {seconds}
            <TimeTitle>seconds</TimeTitle>
          </TimeCont>
          {/* {hours} hours {minutes} minutes {seconds} seconds */}
        </Countdown>
      </TimerContainer>
    );
  }
}

export default CountdownTimer;
