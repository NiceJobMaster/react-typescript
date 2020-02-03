import React from 'react';
import { TodoApi } from '../../api';
import Todo from './Todo/Todo';
import style from './TodoList.module.scss';

interface State {
  todos: [];
}

export default class TodosList extends React.Component<{}, State> {
  state: State = {
    todos: [],
  };

  componentDidMount(): void {
    TodoApi.getTodos()
      .then(res => this.setState({ todos: res.data }))
      .catch(error => console.log(error));
  }

  todoList = (): JSX.Element[] => {
    return this.state.todos.map((currentTodo, i) => {
      return <Todo todo={currentTodo} key={i} />;
    });
  };

  render(): JSX.Element {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.title}>Todos List</div>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Responsible</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.todoList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
