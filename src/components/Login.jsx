import React from 'react';
// import { Input } from 'antd';
// import styles from './Login.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SliderNav from './SliderNav';

class Login extends React.Component {
  handleClick = () => {
    console.log(this);
  }

  render() {
    return (
      <Router>
        <div>
          <SliderNav />
        </div>
      </Router>


    );
  }
}

export default Login;
