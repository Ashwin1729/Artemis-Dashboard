import React, { useState, useEffect, useRef } from "react";
import Badge from "../Badge";
import { Row, Col, Dropdown } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useCountUp } from "react-countup";
import styles from "./NewUser.module.css";
import BarChart from "../charts/BarChart";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const profileDropdown = [
  {
    label: <a href="#">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="#">2nd menu item</a>,
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

const NewUser = () => {
  const [barLabels, setBarLabels] = useState([]);
  const [barData, setBarData] = useState([]);
  const userCountRef = useRef();

  const { countUp } = useCountUp({
    ref: userCountRef,
    start: 50,
    end: 94.2,
    duration: 5,
    decimals: 2,
    useEasing: true,
  });

  useEffect(() => {
    setBarLabels(["", "", "", "", "", "", "", ""]);
    setBarData([30, 100, 30, 100, 60, 80, 50, 80]);
  }, []);

  return (
    <div className={styles.user_container}>
      <Row className={styles.user_data}>
        <Col xs={20}>New Users</Col>
        <Col xs={1}>
          <Dropdown
            menu={{
              items: profileDropdown,
            }}
            trigger={["click"]}
          >
            <EllipsisOutlined className={styles.options} />
          </Dropdown>
        </Col>
      </Row>

      <Row className={styles.user_count}>
        <span ref={userCountRef} />
        <span>%</span>
        <Badge value={6.9} />
      </Row>

      <Row>
        <div className={styles.user_chart}>
          <BarChart label={barLabels} data={barData} />
        </div>
      </Row>
    </div>
  );
};

export default NewUser;
