import React, { Component } from 'react';

import { logo } from 'assets/images';

import Welcome from './Welcome';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Home;
