import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import "normalize-css/normalize.css"
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <img src={logo} className="App-logo" alt="logo" />
        <nav >
          <ul className="tabs">
            <li className="list">
              <Link to="/">Home</Link>
            </li>
            <li className="list">
              <Link to="/about">About</Link>
            </li>
            <li className="list">
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

      </div>
    </Router>
  );
}
function Home() {
  return <h1 className="route">Home content</h1>;
}

function About() {
  return <h2 className="route">About content</h2>;
}

function Users() {
  return <h2 className="route">Users content</h2>;
}
export default App;
