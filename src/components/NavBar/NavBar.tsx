import React from 'react';
import logo from '../../logo.svg';
import style from './NavBar.module.scss';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render(): JSX.Element {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.logoTitle}>
            <Link to="/">
              <img src={logo} className={style.logo} alt="logo" />
            </Link>
            <div className={style.title}>Todo App</div>
          </div>
          <div className={style.links}>
            <Link to="/" className={style.link}>
              Todos
            </Link>
            <Link to="/create" className={style.link}>
              Create Todo
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
