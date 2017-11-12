import React from "react";

import { Layout, Icon, Menu } from "antd";

const { Sider } = Layout;

const SideBar = () =>
  <Sider
    style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0 }}
  >
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
      <Menu.Item key="1">
        <Icon type="appstore-o" />
        <span className="nav-text">Feed</span>
      </Menu.Item>

      <Menu.Item key="2">
        <Icon type="user" />
        <span className="nav-text">Profile</span>
      </Menu.Item>
    </Menu>
  </Sider>;
export default SideBar;
