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
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

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
      </Layout>
    </Layout>
  );
};

export default App;
