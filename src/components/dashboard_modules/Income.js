import React, { useEffect, useRef, useState } from "react";
import Badge from "../Badge";
import { Row, Col, Dropdown, Progress } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useCountUp } from "use-count-up";
import styles from "./Income.module.css";
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

const Income = () => {
  const userCountRef = useRef();

  const [percentage, setPercentage] = useState(0);

  const { value } = useCountUp({
    ref: userCountRef,
    isCounting: true,
    end: 124563,
    duration: 5,
    decimalPlaces: 2,
    easing: "easeOutCubic",
    thousandsSeparator: ",",
  });

  useEffect(() => {
    const idx = value.indexOf(",");
    const numValue = parseInt(value.slice(0, idx) + value.slice(idx + 1));
    setPercentage((numValue / 180000) * 100);
  }, [value]);

  return (
    <div className={styles.user_container}>
      <Row className={styles.user_data}>
        <Col xs={20}>Total Income</Col>
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
        <span>$</span>
        <span>{value}</span>
        <Badge value={6.9} />
      </Row>

      <Row className={styles.progress_bar}>
        <Progress
          percent={percentage}
          status="active"
          showInfo={false}
          size="small"
        ></Progress>
      </Row>
      <Row className={styles.user_subtitle}>Yearly Goal</Row>
    </div>
  );
};

export default Income;
