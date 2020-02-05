import React from 'react';
import { TodoData, TodoType } from '../../types/types';
import { TodoApi } from '../../api';
import { RouteComponentProps } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import style from './EditTodo.module.scss';

export default class EditTodo extends React.Component<
  RouteComponentProps<{ id: string }>,
  TodoData
> {
  state = {
    description: '',
    responsible: '',
    priority: '',
    completed: false,
  };

  componentDidMount(): void {
    TodoApi.getTodo(this.props.match.params.id).then((res: AxiosResponse<TodoType>) => {
      this.setState({
        description: res.data.description,
        responsible: res.data.responsible,
        priority: res.data.priority,
        completed: res.data.completed,
      });
    });
  }

  onChangeTodoDescription = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ description: e.target.value });
  };

  onChangeTodoResponsible = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ responsible: e.target.value });
  };

  onChangeTodoPriority = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ priority: e.target.value });
  };

  onChangeTodoCompleted = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ completed: !!e.target.value });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const data: TodoData = {
      description: this.state.description,
      responsible: this.state.responsible,
      priority: this.state.priority,
      completed: this.state.completed,
    };

    TodoApi.editTodo(this.props.match.params.id, data);

    this.props.history.push('/');
  };

  render(): JSX.Element {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <h3 className={style.title}>Update Todo</h3>
          <form className={style.form} onSubmit={this.onSubmit}>
            <div className={style.inputWrapper}>
              <label className={style.label}>Description: </label>
              <input
                className={style.input}
                type="text"
                value={this.state.description}
                onChange={this.onChangeTodoDescription}
              />
            </div>
            <div className={style.inputWrapper}>
              <label className={style.label}>Responsible: </label>
              <input
                className={style.input}
                type="text"
                value={this.state.responsible}
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
                  checked={this.state.priority === 'Low'}
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
                  checked={this.state.priority === 'Medium'}
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
                  checked={this.state.priority === 'High'}
                  onChange={this.onChangeTodoPriority}
                />
                <label className={style.radioLabel}>High</label>
              </div>
            </div>
            <div className={style.radioWrapper}>
              <div>
                <input
                  id="completedCheckbox"
                  type="checkbox"
                  name="completedCheckbox"
                  onChange={this.onChangeTodoCompleted}
                  checked={this.state.completed}
                />
                <label className={style.radioLabel} htmlFor="completedCheckbox">
                  Completed
                </label>
              </div>
            </div>

            <br />

            <div className={style.buttonWrapper}>
              <input className={style.button} type="submit" value="Update Todo" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
