import React from 'react';
import { Link } from 'react-router-dom';
import { TodoType } from '../../../types/types';

interface Props {
  todo: TodoType;
  key: number;
}

const Todo: React.SFC<Props> = (props: Props): JSX.Element => (
  <tr>
    <td>{props.todo.description}</td>
    <td>{props.todo.responsible}</td>
    <td>{props.todo.priority}</td>
    <td>
      <Link to={'/edit/' + props.todo.id}>Edit</Link>
    </td>
  </tr>
);

export default Todo ;
