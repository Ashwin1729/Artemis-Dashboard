import React from "react";
import { Row, Col } from "antd";

import NewUser from "./dashboard_modules/NewUser";
import styles from "./Dashboard.module.css";
import Balance from "./dashboard_modules/Balance";
import Income from "./dashboard_modules/Income";
import Transactions from "./dashboard_modules/Transactions";

const Dashboard = () => {
  return (
    <div className={styles.dashboard_layout}>
      <Row className={styles.dashboard_graphs}>
        <Col xs={24} lg={12} className={styles.income_layout}>
          <Row className={styles.user_layout}>
            <Income />
          </Row>
          <Row className={styles.user_layout}>
            <NewUser />
          </Row>
        </Col>
        <Col xs={24} lg={12} className={styles.balance_layout}>
          <Balance />
        </Col>
      </Row>
      <Row className={styles.dashboard_transactions}>
        <Transactions />
      </Row>
    </div>
  );
};

export default Dashboard;
