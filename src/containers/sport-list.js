import React, { Component } from 'react'
import { connect } from 'react-redux' //

class SportList extends Component {
  renderList() {
    return this.props.sports.map((sport) => {
      return (
        <li key={sport.name} className="list-group-item">{sport.name}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    sports: state.sports
  }
}

export default connect(mapStateToProps)(SportList)
