import React from "react";
import { Row, Col, Progress } from "antd";
import styles from "./TestComponent.module.css";

const TestComponent = ({ icon, data }) => {
  return (
    <div className={styles.user_container}>
      <Row className={styles.user_data}>
        <Col xs={20}>{data.message}</Col>
      </Row>

      <Row className={styles.user_count}>
        {icon}
        <div>{data.title}</div>
      </Row>

      <Row className={styles.progress_bar}>
        <Progress
          percent={100}
          status="active"
          showInfo={false}
          size="small"
        ></Progress>
      </Row>
    </div>
  );
};

export default TestComponent;
