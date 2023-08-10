import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Dropdown, Button, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useCountUp } from "react-countup";
import styles from "./Balance.module.css";
import Badge from "../Badge";
import { Chart, registerables } from "chart.js";
import LineChart from "../charts/LineChart";

Chart.register(...registerables);

const periodDropdown = [
  {
    value: "monthly",
    label: "Monthly",
  },
  {
    value: "yearly",
    label: "Yearly",
  },
];

const Balance = () => {
  const [width, setWidth] = useState(0);
  const [lineLabels, setLineLabels] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [period, setPeriod] = useState("monthly");

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

    setLineLabels(["", "", "", "", "", "", "", "", "", "", "", ""]);
    setLineData([53, 20, 10, 70, 32, 45, 55, 20, 15, 100, 48, 23]);
  }, []);

  useEffect(() => {
    if (period === "monthly") {
      setLineLabels(["", "", "", "", "", "", "", "", "", "", "", ""]);
      setLineData([53, 20, 10, 70, 32, 45, 55, 20, 15, 100, 48, 23]);
    } else if (period === "yearly") {
      setLineLabels([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ]);
      setLineData([
        65, 55, 60, 55, 75, 90, 12, 58, 96, 102, 153, 90, 120, 170, 60, 50, 78,
        96, 36, 24, 36, 145, 32, 78,
      ]);
    }
  }, [period]);

  const periodHandler = (value) => {
    setPeriod(value);
  };

  return (
    <div className={styles.balance_container}>
      <Row className={styles.balance_header}>
        <Col xs={17} className={styles.balance}>
          Balance
        </Col>
        <Col xs={7} style={{ textAlign: "end" }}>
          {/* <Dropdown
            menu={{
              items: profileDropdown,
            }}
            trigger={["click"]}
          >
            <Button className="color-shade">
              Monthly <DownOutlined style={{ color: "black" }} />
            </Button>
          </Dropdown> */}
          <Select
            defaultValue="monthly"
            onChange={periodHandler}
            options={periodDropdown}
            value={period}
          />
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

      <Row className={styles.line_chart}>
        <LineChart
          label={lineLabels}
          data={lineData}
          title="Earnings increase count in past months ($)"
        />
      </Row>
    </div>
  );
};

export default Balance;
