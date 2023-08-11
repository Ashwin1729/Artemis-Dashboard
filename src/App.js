import React, { useRef } from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TestComponent from "./components/TestComponent";
import {
  GlobalOutlined,
  QuestionCircleOutlined,
  InboxOutlined,
  FolderOpenOutlined,
  DatabaseOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Content, Footer } = Layout;

const App = () => {
  const layoutRef = useRef();

  return (
    <Layout style={{ minHeight: "100vh" }} ref={layoutRef}>
      <SideBar />

      <Layout className="site-layout">
        <div className="header-wrapper">
          <Header />
        </div>
        <Content>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/discover"
              element={
                <TestComponent
                  icon={<GlobalOutlined />}
                  data={{
                    message: "Here we can render Discover page",
                    title: "Discover",
                  }}
                />
              }
            />
            <Route
              path="/support_center"
              element={
                <TestComponent
                  icon={<QuestionCircleOutlined />}
                  data={{
                    message: "Here we can render Support Center page",
                    title: "Support Center",
                  }}
                />
              }
            />
            <Route
              path="/inbox"
              element={
                <TestComponent
                  icon={<InboxOutlined />}
                  data={{
                    message: "Here we can render Inbox page",
                    title: "Inbox",
                  }}
                />
              }
            />
            <Route
              path="/file_manager"
              element={
                <TestComponent
                  icon={<FolderOpenOutlined />}
                  data={{
                    message: "Here we can render File Manager page",
                    title: "File Manager",
                  }}
                />
              }
            />
            <Route
              path="/data_list"
              element={
                <TestComponent
                  icon={<DatabaseOutlined />}
                  data={{
                    message: "Here we can render Data List page",
                    title: "Data List",
                  }}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <TestComponent
                  icon={<SettingOutlined />}
                  data={{
                    message: "Here we can render Settings page",
                    title: "Settings",
                  }}
                />
              }
            />
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
