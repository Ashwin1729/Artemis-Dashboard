import React, { useState } from "react";
import { TiBell } from "react-icons/ti";
import { BiMessageAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Row, Col, Input, Dropdown } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import Profile from "./Profile";
import {
  notificationDropdown,
  messageDropdown,
  settingsDropdown,
} from "../utilities/utils";
import styles from "./Header.module.css";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <Row className={styles.header_container}>
      <Col className={styles.searchBarIcon} xs={1}>
        <BsSearch size={18} />
      </Col>
      <Col sm={10} md={12} lg={14} xl={16} xxl={18}>
        <Input
          className={styles.searchBarInput}
          placeholder="Type to search ..."
          value={search}
          type="text"
          name="name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Col>
      <Col xs={12} sm={6} md={5} lg={4} xl={3} xxl={2}>
        <Row className={styles.icons_container}>
          <Col className={styles.headerIcon}>
            <Dropdown
              menu={{
                items: settingsDropdown,
              }}
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName={styles.navbar_tools}
            >
              <a
                className={styles.ant_dropdown_link}
                onClick={(e) => e.preventDefault()}
              >
                <SettingOutlined className={styles.settings_icon} />
              </a>
            </Dropdown>
          </Col>
          <Col className={styles.headerIcon}>
            <Dropdown
              menu={{
                items: messageDropdown,
              }}
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName={styles.navbar_tools}
            >
              <a
                className={styles.ant_dropdown_link}
                onClick={(e) => e.preventDefault()}
              >
                <BiMessageAlt size={21} color="gray" />
              </a>
            </Dropdown>
          </Col>
          <Col className={styles.headerIcon}>
            <Dropdown
              menu={{
                items: notificationDropdown,
              }}
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName={styles.navbar_tools}
            >
              <a
                className={styles.ant_dropdown_link}
                onClick={(e) => e.preventDefault()}
              >
                <TiBell size={21} color="gray" />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Col>
      <Col sm={7} md={6} lg={5} xl={4} xxl={3}>
        <Profile />
      </Col>
    </Row>
  );
};

export default Header;
