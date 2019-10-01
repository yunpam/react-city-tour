import React, { Component, Fragment } from 'react';

import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/Tour-List';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <TourList/>
      </Fragment>
    );
  }

}

export default App;
