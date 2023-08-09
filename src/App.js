import React, { useState, useRef } from "react";
import { Layout, Menu, Breadcrumb, Row, Col, Switch as Switchs } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined,
  QuestionCircleOutlined,
  InboxOutlined,
  FolderOpenOutlined,
  BarsOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(0);

  const layoutRef = useRef();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }} ref={layoutRef}>
      <SideBar />

      <Layout className="site-layout" theme="light">
        <div className="header-wrapper">
          <Header />
        </div>
        <Content>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Artemis Dashboard ©2023 Created by Ashwin Dhuriya
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
