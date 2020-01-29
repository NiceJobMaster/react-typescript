import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header, Description } from './components';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Description countBy={3} />
      </header>
    </div>
  );
};

export default App;
