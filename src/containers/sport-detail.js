import React, { Component } from 'react'
import { connect } from 'react-redux'

class SportDetail extends Component {
  render() {
    // debugger

    // if (this.props.sport === null) {      REFACTORED BELOW
    if (!this.props.sport) {
      return (
        <div>
          <p>Please select a sport to get more info about it!</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <h3>Sport details for <em>{this.props.sport.name}</em></h3>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    sport: state.activeSport
  }
}

export default connect(mapStateToProps)(SportDetail)
