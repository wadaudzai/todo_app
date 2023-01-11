import React, { Component } from 'react';
import StateTry from './StateTry';

export default class TryState extends Component {
    state = {
        works: [
            {
                id: 1,
                name: 'walid',
                job: 'nothing'
            },
            {
                id: 2,
                name: 'walid',
                job: 'nothing'
            },
            {
                id: 3,
                name: 'walid',
                job: 'nothing'
            }
        ]
    }
  render() {
    return (
      <StateTry works={this.state.works}/>
    )
  }
}
