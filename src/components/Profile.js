import React from "react";
import { Row, Col, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./Profile.module.css";
import profile_pic from "../assets/profile_pic.jpg";

const profileDropdown = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const Profile = () => {
  return (
    <Row
      xs={12}
      sm={6}
      md={5}
      lg={4}
      xl={3}
      xxl={2}
      className={styles.profile_container}
    >
      <Col xs={15} className={styles.profile_data}>
        <Row className={styles.name}>Thomas Brown</Row>
        <Row className={styles.designation}>Developer</Row>
      </Col>
      <Col xs={6} className={styles.center}>
        <img
          src={profile_pic}
          alt="profile_pic"
          className={styles.profile_pic}
        />
      </Col>
      <Col className={styles.center}>
        <Dropdown
          menu={{
            items: profileDropdown,
          }}
          trigger={["click"]}
          overlayClassName={styles.navbar_tools}
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <DownOutlined className={styles.dropdown_icon} />
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Profile;
