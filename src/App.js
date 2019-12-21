import React from 'react';
import './App.css';
import User from './pages/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/ItemDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
          <Route path="/user/:id" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
