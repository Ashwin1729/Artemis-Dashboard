import React, { useState } from "react";
import { Col, Row, Tabs } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { Table, ExportTableButton } from "ant-table-extensions";
import styles from "./Transactions.module.css";

const { TabPane } = Tabs;

const Transactions = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columnsData = [
    {
      title: "Invoice Id",
      dataIndex: "Invoice",
      key: "invoice",
      render: (invoice) => {
        return (
          <div
            style={{
              fontWeight: "500",
            }}
          >
            {invoice}
          </div>
        );
      },
      sorter: (a, b) => (Math.random() < 0.5 ? 1 : 0),
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
      render: (date) => {
        return (
          <div
            style={{
              fontWeight: "500",
            }}
          >
            {date}
          </div>
        );
      },
      sorter: (a, b) => (Math.random() < 0.5 ? 1 : 0),
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      render: (description) => {
        return (
          <div
            style={{
              fontWeight: "500",
            }}
          >
            {description}
          </div>
        );
      },
      sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "#F44336";
        if (status == "Completed") {
          color = "#00c800";
        } else if (status == "Pending") {
          color = "#FCB900";
        }
        return (
          <div
            className={styles.badge}
            style={{
              backgroundColor: color,
            }}
          >
            {status}
          </div>
        );
      },
      sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
      render: (amount) => {
        return (
          <div
            style={{
              fontWeight: "500",
            }}
          >
            ${amount}
          </div>
        );
      },
      sorter: (a, b) => (Math.random() < 0.5 ? 1 : -1),
    },
  ];

  const rowIncomingData = [
    {
      key: 1,
      Invoice: "M063592DR2",
      Date: "08.04.2021",
      Description: "Code 5928MD01",
      status: "Completed",
      Amount: "2500.00",
    },
    {
      key: 2,
      Invoice: "M063592DR2",
      Date: "08.04.2021",
      Description: "Code 5928MD01",
      status: "Completed",
      Amount: "2500.00",
    },
    {
      key: 3,
      Invoice: "M063592DR2",
      Date: "08.04.2021",
      Description: "Code 5928MD01",
      status: "Completed",
      Amount: "2500.00",
    },
    {
      key: 4,
      Invoice: "M063592DR2",
      Date: "08.04.2021",
      Description: "Code 5928MD01",
      status: "Completed",
      Amount: "2500.00",
    },
    {
      key: 5,
      Invoice: "M063592DR2",
      Date: "08.04.2021",
      Description: "Code 5928MD01",
      status: "Completed",
      Amount: "2500.00",
    },
  ];

  const rowInvoiceData = [
    {
      key: 1,
      Invoice: "AH09802HF99",
      Date: "12.08.2023",
      Description: "Code 8934AD73",
      status: "Pending",
      Amount: "5000.00",
    },
    {
      key: 2,
      Invoice: "AH09802HF99",
      Date: "12.08.2023",
      Description: "Code 8934AD73",
      status: "Completed",
      Amount: "5000.00",
    },
    {
      key: 3,
      Invoice: "AH09802HF99",
      Date: "12.08.2023",
      Description: "Code 8934AD73",
      status: "Pending",
      Amount: "5000.00",
    },
    {
      key: 4,
      Invoice: "AH09802HF99",
      Date: "12.08.2023",
      Description: "Code 8934AD73",
      status: "Completed",
      Amount: "5000.00",
    },
    {
      key: 5,
      Invoice: "AH09802HF99",
      Date: "12.08.2023",
      Description: "Code 8934AD73",
      status: "Completed",
      Amount: "5000.00",
    },
  ];

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
