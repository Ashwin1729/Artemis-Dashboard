import React, { useState } from "react";
import { Col, Row, Tabs } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { Table, ExportTableButton } from "ant-table-extensions";
import {
  columnsData,
  rowIncomingData,
  rowInvoiceData,
} from "../../utilities/testData";
import styles from "./Transactions.module.css";

const { TabPane } = Tabs;

const Transactions = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <div className={styles.transaction_layout}>
      <Row className={styles.heading}>
        <Col md={20} xs={12} className={styles.transaction_heading}>
          Recent Transactions
        </Col>
        <Col md={4} xs={12} className={styles.export_button}>
          <ExportTableButton
            dataSource={rowIncomingData}
            columns={columnsData}
            btnProps={{ type: "primary", icon: <ExportOutlined /> }}
          >
            Export
          </ExportTableButton>
        </Col>
      </Row>
      <Row className={styles.transaction_table_layout}>
        <Tabs defaultActiveKey="1" className={styles.tab}>
          <TabPane tab="Incoming " key="1">
            <Table
              pagination={false}
              className={styles.transaction_table}
              rowSelection={rowSelection}
              rowClassName={(record, index) =>
                index % 2 === 0 ? styles.row_dark : styles.row_light
              }
              dataSource={rowIncomingData}
              columns={columnsData}
            />
          </TabPane>
          <TabPane tab="Invoices" key="2">
            <Table
              pagination={false}
              className={styles.transaction_table}
              rowSelection={rowSelection}
              rowClassName={(record, index) =>
                index % 2 === 0 ? styles.row_dark : styles.row_light
              }
              dataSource={rowInvoiceData}
              columns={columnsData}
            />
          </TabPane>
        </Tabs>
      </Row>
    </div>
  );
};

export default Transactions;
