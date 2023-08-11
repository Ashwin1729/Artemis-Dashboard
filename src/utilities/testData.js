export const lineMonthLabels = ["", "", "", "", "", "", "", "", "", "", "", ""];
export const lineYearLabels = [
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
  "",
  "",
  "",
  "",
  "",
  "",
];

export const lineMonthData = [53, 20, 10, 70, 32, 45, 55, 20, 15, 100, 48, 23];
export const lineYearData = [
  65, 55, 60, 55, 75, 90, 12, 58, 96, 102, 153, 90, 120, 170, 60, 50, 78, 96,
  36, 24, 36, 100, 32, 78, 90, 40, 60, 50, 120, 170,
];

export const columnsData = [
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: " 0 0.2rem",
            padding: "1px",
            fontSize: "small",
            color: "white",
            fontWeight: "400",
            borderRadius: "500px",
            width: "5rem",
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

export const rowIncomingData = [
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

export const rowInvoiceData = [
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
