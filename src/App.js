import React, { Component } from 'react';
import Title from './components/Title'
import Scoreboard from './components/Scoreboard'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-intro">
          <Title content = "Scorechanger" />
          <Scoreboard />
        </div>
      </div>
    );
  }
}

export default App;
