import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useCountUp } from "react-countup";
import styles from "./Balance.module.css";
import Badge from "../Badge";
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

const Balance = () => {
  const [width, setWidth] = useState(0);
  const earningsRef = useRef();
  const salesValueRef = useRef();

  const { earnings } = useCountUp({
    ref: earningsRef,
    start: 20,
    end: 43.41,
    duration: 5,
    decimals: 2,
    useEasing: true,
  });

  const { salesValue } = useCountUp({
    ref: salesValueRef,
    start: 70000,
    end: 95422,
    duration: 5,
    useEasing: true,
  });

  useEffect(() => {
    let style = getComputedStyle(document.querySelector("body"));
    setWidth(parseInt(style.width));

    window.addEventListener("resize", () => {
      let style = getComputedStyle(document.querySelector("body"));
      setWidth(parseInt(style.width));
    });
  }, []);

  return (
    <div className={styles.balance_container}>
      <Row className={styles.balance_header}>
        <Col xs={17} className={styles.balance}>
          Balance
        </Col>
        <Col xs={7} style={{ textAlign: "end" }}>
          <Dropdown
            menu={{
              items: profileDropdown,
            }}
            trigger={["click"]}
          >
            <Button className="color-shade">
              Monthly <DownOutlined style={{ color: "black" }} />
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <div className={styles.divider}></div>
      <Row className={styles.earnings}>
        <Col className={styles.earnings_card1}>
          <Row className={styles.textColor}>Earnings</Row>

          <Row className={styles.earnings_count}>
            <span ref={earningsRef} />
            <span>%</span>
            <Badge value={2.5} />
          </Row>
        </Col>

        <Col className={styles.earnings_card1}>
          <Row className={styles.textColor}>Sales Value</Row>

          <Row className={styles.earnings_count}>
            <span>$</span>
            <span ref={salesValueRef} />
            <Badge value={13.5} />
          </Row>
        </Col>
      </Row>

      <Row className={styles.line_chart}>{/* Line chart */}</Row>
    </div>
  );
};

export default Balance;
