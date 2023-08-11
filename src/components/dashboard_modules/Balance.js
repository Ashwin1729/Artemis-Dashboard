import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Select } from "antd";
import { useCountUp } from "react-countup";
import styles from "./Balance.module.css";
import Badge from "../Badge";
import { Chart, registerables } from "chart.js";
import { periodDropdown } from "../utilities/utils";
import LineChart from "../charts/LineChart";
import {
  lineMonthLabels,
  lineMonthData,
  lineYearLabels,
  lineYearData,
} from "../../utilities/testData";

Chart.register(...registerables);

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

    setLineLabels(lineMonthLabels);
    setLineData(lineMonthData);
  }, []);

  useEffect(() => {
    if (period === "monthly") {
      setLineLabels(lineMonthLabels);
      setLineData(lineMonthData);
    } else if (period === "yearly") {
      setLineLabels(lineYearLabels);
      setLineData(lineYearData);
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
