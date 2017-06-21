import React, { Component } from 'react'
import { connect } from 'react-redux'

class SportDetail extends Component {
  render() {
    // debugger

    // if (this.props.sport === null) {      REFACTORED BELOW
    if (!this.props.sport) {
      return (
        <div className="sport-details">
          <p>Please select a sport to get more info about it!</p>
        </div>
      )
    }
    else {
      return (
        <div className="sport-details">
          <h3 className="sport-detail-header">Sport details for <em>{this.props.sport.name}</em></h3>
          <div>Description:
            <p>{this.props.sport.description}</p>
          </div>
          <img src={this.props.sport.img_url}></img>
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
