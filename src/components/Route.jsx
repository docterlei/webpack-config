import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Input } from 'antd';
// import styles from './Route.css';

class RouteD extends React.Component {
  Index = () => <h2>Home</h2>;

  About = () => <h2>About</h2>;

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={this.Index} />
          <Route path="/about/" component={this.About} />
        </div>
      </Router>
    );
  }
}

export default RouteD;
