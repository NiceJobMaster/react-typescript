import React from 'react';
import { Link } from 'react-router-dom';
import { TodoType } from '../../../types/types';
import style from './Todo.module.scss';

interface Props {
  todo: TodoType;
  key: number;
}

const Todo: React.SFC<Props> = (props: Props): JSX.Element => (
  <tr>
    <td className={props.todo.completed ? style.completed : ''}>{props.todo.description}</td>
    <td className={props.todo.completed ? style.completed : ''}>{props.todo.responsible}</td>
    <td className={props.todo.completed ? style.completed : ''}>{props.todo.priority}</td>
    <td>
      <Link to={'/edit/' + props.todo.id}>Edit</Link>
    </td>
  </tr>
);

export default Todo ;
