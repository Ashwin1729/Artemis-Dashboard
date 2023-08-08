import React, { useState } from "react";
import { Layout, Menu, Row } from "antd";
import {
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
  GlobalOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import artemis_logo from "../assets/artemis_logo.png";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(0);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider
      breakpoint="md"
      collapsed={collapsed}
      onCollapse={onCollapse}
      className={styles.sider_main}
      collapsedWidth={0}
      width="300px"
      theme="light"
      // width={width > 600 ? "300px" : "200px"}
    >
      <div
        className={!collapsed ? styles.logo : styles.logo_collapsed}
        style={{
          color: "black",
        }}
      >
        <img src={artemis_logo} alt="artemis_logo" />
        Artemis
      </div>
      <div className={styles.divider}></div>
      <Row className={styles.headliners}>
        <div
          style={{
            fontSize: `${collapsed ? ".3rem" : "0.7rem"}`,
            color: "black",
            opacity: 0.5,
          }}
        >
          MAIN
        </div>
      </Row>
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/dashboard"> Dashboard </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<GlobalOutlined />}>
          <Link to="/discover">Discover</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<SnippetsOutlined />} title="Documents">
          <Menu.Item key="8">Doc1</Menu.Item>
          <Menu.Item key="9">Doc2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<AppstoreOutlined />} title=" Applications">
          <Menu.Item key="8">Doc1</Menu.Item>
          <Menu.Item key="9">Doc2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<FileOutlined />} title="Pages">
          <Menu.Item key="10">Page1</Menu.Item>
          <Menu.Item key="11">Page2</Menu.Item>
        </SubMenu>

        <Row className={styles.headliners}>
          <div
            style={{
              fontSize: `${collapsed ? ".3rem" : "0.7rem"}`,
              color: "black",
              opacity: 0.5,
            }}
          >
            SECONDARY
          </div>
        </Row>

        <Menu.Item key="12" icon={<QuestionCircleOutlined />}>
          <Link to="/support_center">Support Center</Link>
        </Menu.Item>
        <Menu.Item key="13" icon={<InboxOutlined />}>
          <Link to="/inbox">Inbox</Link>
        </Menu.Item>
        <Menu.Item key="14" icon={<FolderOpenOutlined />}>
          <Link to="/file_manager">File manager</Link>
        </Menu.Item>
        <Menu.Item key="15" icon={<BarsOutlined />}>
          <Link to="/data_list">Data List</Link>
        </Menu.Item>
        <Menu.Item key="16" icon={<SettingOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item key="17" icon={<LogoutOutlined />}>
          <Link to="/log_out">Log Out</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
