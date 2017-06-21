import React, { Component } from 'react'
import { connect } from 'react-redux'

class SportDetail extends Component {
  render() {
    // the if statement below is because the first time the page loads the
    // state of SportDetail will be null (see the reducer_active_sport). So
    // we need to catch it. Since this.props.sport will be null and can not
    // be rendered on the page.

    // if (this.props.sport === null) {      REFACTORED BELOW
    if (!this.props.sport) {
      return (
        <div className="sport-details">
          <p className="sport-detail-header">Please select a sport to get more info about it!</p>
        </div>
      )
    }
    else {
      return (
        <div className="sport-details">
          <h3 className="sport-detail-header">Sport details for <em>{this.props.sport.name}</em></h3>
          <div className="row">
            <p className="col-md-1"></p>
            <p className="col-md-2">Description:</p>
            <p className="col-md-8">{this.props.sport.description}</p>
            <p className="col-md-1"></p>
          </div>
          <img src={this.props.sport.img_url}></img>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    sport: state.activeSport // the activeSport given by reducers/index.js
    // is available in the state and is now given to 'state' as 'sport'.
  }
}

export default connect(mapStateToProps)(SportDetail)
// state 'sport' is given to class 'SportDetail' here and will now be
// available as 'this.props.sport'
