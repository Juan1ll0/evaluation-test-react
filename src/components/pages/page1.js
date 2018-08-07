import React from 'react';
import { compose, lifecycle } from 'recompose';

import { waitForData } from 'components/hoc/common';

const onMountFetchTodos = lifecycle({
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }
});

const renderTodo = list => (
  <ul>
    {list.map(todo => (
      <li className="App-list-item" key={todo.id}>
        {todo.title}
      </li>
    ))}
  </ul>
);

const Page1 = ({ todos }) => <main>{renderTodo(todos)}</main>;

const decorator = compose(
  onMountFetchTodos,
  waitForData
);
export default decorator(Page1);
