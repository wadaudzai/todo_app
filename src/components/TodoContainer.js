import React from 'react';
import TodoList from './TodoList';
import Header from './Header';

class TodoContainer extends React.Component {
    state = {
      todos: [
        {
          id: 1,
          title: 'Work on stuff',
          completed: true,
        },
        {
          id: 2,
          title: 'Work on mtuff',
          completed: false,
        },
        {
          id: 3,
          title: 'Work on stuff',
          completed: false,
        },
      ],
    }

    render() {
      return (
        <>
          <Header />
          <TodoList todos={this.state.todos} />
        </>
      );
    }
}
export default TodoContainer;
