import React from "react";
import { Row, Col } from "antd";

import NewUser from "./dashboard_modules/NewUser";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard_layout}>
      <Row className={styles.dashboard_graphs}>
        <Col xs={24} lg={12}>
          <Row>
            <div>Total Income</div>
          </Row>
          <Row style={{ margin: "30px 0px" }}>
            <NewUser />
          </Row>
        </Col>
        <Col xs={24} lg={12}>
          <div>Total Balance</div>
        </Col>
      </Row>
      <Row>
        <div>Transactions</div>
      </Row>
    </div>
  );
};

export default Dashboard;
