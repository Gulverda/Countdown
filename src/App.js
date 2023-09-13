import React, { Component } from 'react';
import CountdownTimer from './layout/CountdownTimer';
import styled from 'styled-components';
import './App.css'

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 90px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 11.25px;
  margin-top: -20px;

  @media (max-width: 768px) {
    font-size: 60px; /* Adjust font size for smaller screens */
  }
`;

const SecondTitle = styled.h2`
color: #A5DEFF;
text-align: center;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 6.4px;
margin-top: 22px;

@media (max-width: 768px) {
    font-size: 24px; /* Adjust font size for smaller screens */
  }
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(9, 33, 67, 0.70);
  box-shadow: 24px 26px 4px -11px rgba(0, 0, 0, 0.50);
  backdrop-filter: blur(10px);
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  width: 80%; /* Use a percentage for responsiveness */
  max-width: 1049px; /* Set a maximum width */
  min-height: 510px; /* Allow the height to adjust based on content */
  height: auto;
  padding: 40px;

  @media (max-width: 768px) {
    width: 90%; /* Adjust the width for smaller screens */
  }
`;

class App extends Component {
  handleCountdownComplete = () => {
    // Handle what happens when the countdown is complete.
    alert('Countdown is complete!');
  };

  render() {

    return (
      <AppContainer>
        <TimerContainer>
          <Title>HAPPY NEW YEAR</Title>
          <SecondTitle>T - MINUS:</SecondTitle>
          <CountdownTimer targetDate="2023-12-31T00:00:00Z" />
        </TimerContainer>
      </AppContainer>
    );
  }
}

export default App;
