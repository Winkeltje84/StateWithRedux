import React, { Component } from 'react';
import SportList from '../containers/sport-list'
import SportDetail from '../containers/sport-detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <SportList />
        <SportDetail />
      </div>
    );
  }
}
