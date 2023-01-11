import React, { Component } from 'react'

export default class StateTry extends Component {
  render() {
    return (
        <ul>
        {this.props.works.map(work => (
          <li key={work.id}>{work.name}</li>
        ))}
      </ul>
    )
  }
}
