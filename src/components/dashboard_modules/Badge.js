import React from "react";
import styles from "./Badge.module.css";

const Badge = ({ value }) => {
  return <div className={styles.badge}>+{value} %</div>;
};

export default Badge;
