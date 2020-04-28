import React, { Component } from 'react';

import HomeRouter from './HomeRouter';
import Header from 'components/common/layout/Header';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomeRouter />
      </div>
    );
  }
}
export default Home;
