import React, { Component } from 'react';

import Header from 'components/common/layout/Header';
import HomeRouter from './HomeRouter';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HomeRouter />
      </div>
    );
  }
}
export default Home;
