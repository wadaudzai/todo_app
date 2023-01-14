import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" />
        {' '}
        {this.props.todo.title}
      </li>
    );
  }
}
