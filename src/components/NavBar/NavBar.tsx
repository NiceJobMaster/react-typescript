import React from 'react';
import logo from '../../logo.svg';
import style from './NavBar.module.scss';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render(): JSX.Element {
    return (
      <div className={style.wrapper}>
        <Link to="/">
          <img src={logo} className={style.logo} alt="logo" />
        </Link>
        <div className={style.container}>
          <div className={style.title}>Todo App</div>
          <Link to="/" className={style.link}>
            Todos
          </Link>
          <Link to="/create" className={style.link}>
            Create Todo
          </Link>
        </div>
      </div>
    );
  }
}
