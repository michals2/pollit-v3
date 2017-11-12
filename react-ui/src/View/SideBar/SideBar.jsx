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
        <Icon type="user" />
        <span className="nav-text">Profile</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span className="nav-text">nav 2</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span className="nav-text">nav 3</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="bar-chart" />
        <span className="nav-text">nav 4</span>
      </Menu.Item>
      <Menu.Item key="5">
        <Icon type="cloud-o" />
        <span className="nav-text">nav 5</span>
      </Menu.Item>
      <Menu.Item key="6">
        <Icon type="SideBarstore-o" />
        <span className="nav-text">nav 6</span>
      </Menu.Item>
      <Menu.Item key="7">
        <Icon type="team" />
        <span className="nav-text">nav 7</span>
      </Menu.Item>
      <Menu.Item key="8">
        <Icon type="shop" />
        <span className="nav-text">nav 8</span>
      </Menu.Item>
    </Menu>
  </Sider>;
export default SideBar;