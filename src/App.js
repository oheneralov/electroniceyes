//https://reacttraining.com/react-router/web/example/basic
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import About from './About';
import Home from './Home';
import Train from './Train';

class App extends Component {
  render() {
    return (
       <Router>
      <div>
        <ul>
          <li>
            <NavLink exact={true} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/train">Train</NavLink>
          </li>
        </ul>
        <Route exact path="/"component={Home} />
        <Route path="/about" component={About} />
        <Route path="/train" component={Train} />
      </div>
    </Router>
    );
  }
}

export default App;
