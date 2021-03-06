import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSport } from '../actions/index'  // importing the action creator
import { bindActionCreators } from 'redux' // makes sure the action generated
 // by the actioncreator actually flows through all the reducers

class SportList extends Component {
  renderList() {
    // debugger
    return this.props.sports.map((sport) => {
      return (
        <li
          key={sport.name}
          onClick={() => this.props.selectSport(sport)}
          className="list-group-item five-columns-in-row">{sport.name}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group row">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of SportList
  return {
    sports: state.sports
  }
}

//  anything returned from this function will end up as props on the
// SportList container (via de CONNECT function) so
// this.props.selectSport(sport) can be used
function mapDispatchToProps(dispatch) {
  // when selectSport is called, the result should be passed (dispatched) to all reducers
  return bindActionCreators({ selectSport: selectSport }, dispatch)
}

// 'connect' promotes component 'SportList' to a smart component (container)
// and makes sure it has acces to the props defined in
// mapStateToProps & mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(SportList)
