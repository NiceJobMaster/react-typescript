import React from 'react';
import { TodoData, TodoType } from '../../types/types';
import { TodoApi } from '../../api';
import { RouteComponentProps } from 'react-router-dom';
import { AxiosResponse } from 'axios';

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
      <div>
        <div>
          <h3>Update Todo</h3>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Description: </label>
              <input
                type="text"
                value={this.state.description}
                onChange={this.onChangeTodoDescription}
              />
            </div>
            <div>
              <label>Responsible: </label>
              <input
                type="text"
                value={this.state.responsible}
                onChange={this.onChangeTodoResponsible}
              />
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  name="priorityOptions"
                  id="priorityLow"
                  value="Low"
                  checked={this.state.priority === 'Low'}
                  onChange={this.onChangeTodoPriority}
                />
                <label>Low</label>
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
                <label>Medium</label>
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
                <label>High</label>
              </div>
            </div>
            <div>
              <input
                id="completedCheckbox"
                type="checkbox"
                name="completedCheckbox"
                onChange={this.onChangeTodoCompleted}
                checked={this.state.completed}
              />
              <label htmlFor="completedCheckbox">Completed</label>
            </div>

            <br />

            <div>
              <input type="submit" value="Update Todo" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
