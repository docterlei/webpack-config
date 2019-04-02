import React from 'react';

class Login extends React.Component {
  handleClick = () => {
    console.log(this);
  }

  render() {
    return <h1 onClick={this.handleClick}>Hello, Login</h1>;
  }
}

export default Login;
