import React, { useRef } from "react";
import { Layout } from "antd";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

const { Content, Footer } = Layout;

const App = () => {
  const layoutRef = useRef();

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
