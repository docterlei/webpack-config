import React from 'react';
import { Input } from 'antd';
import styles from './Route.css';

class Route extends React.Component {
  handleClick = () => {
    console.log(this);
  }

  render() {
    return (
      <div className={styles.divtest}>
        我是route:
        {' '}
        <Input />
      </div>
    );
  }
}

export default Route;
