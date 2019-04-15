import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const Slider = Layout.Sider;

class SliderNav extends Component {
  handleClick = (e) => {
    if (e.keyPath.length === 2) {
      console.log(this.props.history);
      this.props.history.push(`${e.keyPath[1]}/${e.keyPath[0]}`);
    }
  }

  render() {
    return (
      <Slider>
        <Menu theme="dark" mode="vertical" onClick={this.handleClick}>
          <SubMenu title="keyhaha" key="key1">
            <Menu.Item key="jjkey">jj</Menu.Item>
            <Menu.Item key="qjkey">jw</Menu.Item>
            <Menu.Item key="jjs">jff</Menu.Item>
          </SubMenu>
          <SubMenu title="keyxixi" key="key2">
            <Menu.Item key="jj1key">jj</Menu.Item>
            <Menu.Item key="qj1key">jw</Menu.Item>
            <Menu.Item key="jj1skey">jff</Menu.Item>
          </SubMenu>
        </Menu>
      </Slider>
    );
  }
}

export default withRouter(SliderNav);
