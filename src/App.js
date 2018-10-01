import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherContainer from './containers/WeatherContainer';

const WeatherApp = styled.div`
    height: 100vh;
    background-color: #6ca3ff;
`;
const AppTitle = styled.h1`
    margin: 0;
`;

class App extends Component {
  render() {
    return (
      <WeatherApp>
        <header className="App-header">
          <AppTitle className="App-title">Welcome to weather app</AppTitle>
        </header>
          <WeatherContainer />
      </WeatherApp>
    );
  }
}

export default App;
