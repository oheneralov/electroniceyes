//https://reacttraining.com/react-router/web/example/basic
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import About from './About';
import Home from './Home';
import Train from './Train';
import {ThemeContext, themes} from './theme-context';


class App extends Component {
  render() {
    return (
       <ThemeContext.Provider value={themes.en}>
       <Router>
      <div>
        <ul>
          <li>
            <NavLink exact={true} to="/frontend">Home</NavLink>
          </li>
          <li>
            <NavLink to="/frontend/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/frontend/train">Train</NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/frontend" component={Home} />
        <Route exact path="/frontend/about" component={About} />
        <Route exact path="/frontend/train" component={Train} />
      </div>
    </Router>
    </ThemeContext.Provider>
    );
  }
}

export default App;
