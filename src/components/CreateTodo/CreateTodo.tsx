import React from 'react';
import style from './CreateTodo.module.scss';
import { TodoApi } from '../../api';
import { TodoData } from '../../types/types';

interface State {
  todoDescription: string;
  todoResponsible: string;
  todoPriority: string;
  todoCompleted: boolean;
}

export default class CreateTodo extends React.Component<{}, State> {
  state: State = {
    todoDescription: '',
    todoResponsible: '',
    todoPriority: '',
    todoCompleted: false,
  };

  onChangeTodoDescription = (e: React.FormEvent): void => {
    this.setState({
      todoDescription: (e.target as HTMLInputElement).value,
    });
  };

  onChangeTodoResponsible = (e: React.FormEvent): void => {
    this.setState({
      todoResponsible: (e.target as HTMLInputElement).value,
    });
  };

  onChangeTodoPriority = (e: React.FormEvent): void => {
    this.setState({
      todoPriority: (e.target as HTMLInputElement).value,
    });
  };

  onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const todoData: TodoData = {
      description: this.state.todoDescription,
      responsible: this.state.todoResponsible,
      priority: this.state.todoPriority,
      completed: this.state.todoCompleted,
    };

    TodoApi.addTodo(todoData)
      .then(res => console.log(res))
      .catch(error => console.log(error));

    this.setState({
      todoDescription: '',
      todoResponsible: '',
      todoPriority: '',
      todoCompleted: false,
    });
  };

  render(): JSX.Element {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.title}>Create New Todo</div>
          <form className={style.form} onSubmit={this.onSubmit}>
            <div className={style.inputWrapper}>
              <label className={style.label}>Description:</label>
              <input
                className={style.input}
                type="text"
                value={this.state.todoDescription}
                onChange={this.onChangeTodoDescription}
              />
            </div>
            <div className={style.inputWrapper}>
              <label className={style.label}>Responsible:</label>
              <input
                className={style.input}
                type="text"
                value={this.state.todoResponsible}
                onChange={this.onChangeTodoResponsible}
              />
            </div>
            <div className={style.radioWrapper}>
              <div>
                <input
                  type="radio"
                  name="priorityOptions"
                  id="priorityLow"
                  value="Low"
                  checked={this.state.todoPriority === 'Low'}
                  onChange={this.onChangeTodoPriority}
                />
                <label className={style.radioLabel}>Low</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="priorityOptions"
                  id="priorityMedium"
                  value="Medium"
                  checked={this.state.todoPriority === 'Medium'}
                  onChange={this.onChangeTodoPriority}
                />
                <label className={style.radioLabel}>Medium</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="priorityOptions"
                  id="priorityHigh"
                  value="High"
                  checked={this.state.todoPriority === 'High'}
                  onChange={this.onChangeTodoPriority}
                />
                <label className={style.radioLabel}>High</label>
              </div>
            </div>
            <div className={style.buttonWrapper}>
              <input className={style.button} type="submit" value="Create Todo" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
