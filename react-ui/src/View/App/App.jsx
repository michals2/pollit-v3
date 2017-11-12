import "antd/dist/antd.css";
import React from "react";

import { Layout } from "antd";

// Controller imports
import VisibleFeed from "Controller/VisibleFeed";

// View imports
import SideBar from "View/SideBar/SideBar";

const { Header, Content, Footer } = Layout;

const App = () =>
  <Layout>
    <SideBar />
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: "#fff", padding: 0 }} />
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div style={{ padding: 24, background: "#fff" }}>
          <VisibleFeed />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Luke Michals</Footer>
    </Layout>
  </Layout>;

export default App;
