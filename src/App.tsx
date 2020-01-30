import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TodosList, EditTodo, CreateTodo, NavBar } from './components';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </Router>
  );
};

export default App;
