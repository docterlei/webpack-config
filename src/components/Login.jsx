import React from 'react';
import { Input } from 'antd';
import styles from './Login.css';
import Route from './Route.jsx';

class Login extends React.Component {
  handleClick = () => {
    console.log(this);
  }

  render() {
    return (
      <div className={styles.divtest}>
        <Route />
        <span style={{ color: 'black' }}>哈哈</span>
        登陆:
        {' '}
        <Input />
      </div>
    );
  }
}

export default Login;
