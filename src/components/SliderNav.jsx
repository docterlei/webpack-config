import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const Slider = Layout.Sider;

class SliderNav extends Component {
  render() {
    return (
      <Slider>
        <Menu theme="dark" mode="vertical">
          <SubMenu title="haha">
            <Menu.Item key="jj">jj</Menu.Item>
          </SubMenu>
        </Menu>
      </Slider>
    );
  }
}

export default SliderNav;
