/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import * as React from 'react';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import { Grid, Box, Typography, Chip, Stack, Tab, Tabs, Modal, Button, TextField, Avatar, List, ListItem, ListItemText } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import {
  IconCalendarCheck,
  IconMailCheck,
  IconInbox,
} from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";

import UserSavingsPlans from "../../components/dashboard/UserSavingsPlan";
import UserAjoPlans from "../../components/dashboard/UserAjoPlans";
import TotalWallet from '../../components/dashboard/TotalWallet';
import SavingsData from '../../components/dashboard/SavingsData';

import usersData from "../../data/users.json";
import { DataGrid } from '@mui/x-data-grid';
import SavingsTransactions from '../../components/dashboard/SavingsTransactions';
import PlansMember from '../../components/dashboard/PlansMember';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #555",
  boxShadow: 24,
  p: 4,
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const transaction = [
  {
    "id": "txn_001",
    "type": "Savings",
    "date": "2024-05-14",
    "status": "Success",
    "amount": 10000.00,
    "description": "Deposit to Savings Account"
  },
  {
    "id": "txn_002",
    "type": "Ajo",
    "date": "2024-05-10",
    "status": "Pending",
    "amount": 50000.00,
    "description": "Contribution to Ajo Pool"
  },
  {
    "id": "txn_003",
    "type": "Wallet",
    "date": "2024-05-13",
    "status": "Completed",
    "amount": 25000.50,
    "description": "Airtime Purchase"
  },
  {
    "id": "txn_004",
    "type": "Savings",
    "date": "2024-05-08",
    "status": "Success",
    "amount": 75130.00,
    "description": "Transfer from Checking Account"
  },
  {
    "id": "txn_005",
    "type": "Wallet",
    "date": "2024-05-12",
    "status": "Failed",
    "amount": 25500.00,
    "description": "Money Transfer (Insufficient Funds)"
  }
]

const activityLogs = [
  {
    id: "log_001",
    userId: "user_123",
    username: "johndoe",
    action: "Joined Plan",
    planName: "Safe Saver",
    timestamp: "2024-05-15 10:00:00",
  },
  {
    id: "log_002",
    userId: "user_456",
    username: "janedoe",
    action: "Created Plan",
    planName: "Emergency Fund",
    timestamp: "2024-05-15 11:30:25",
  },
  {
    id: "log_003",
    userId: "user_123",
    username: "johndoe",
    action: "Added Money to Wallet",
    amount: 1000.00,
    currency: "NGN",
    timestamp: "2024-05-15 12:15:42",
  },
  {
    id: "log_004",
    userId: "user_789",
    username: "alice",
    action: "Withdrew Money from Wallet",
    amount: 250.00,
    currency: "NGN",
    timestamp: "2024-05-15 14:00:11",
  },
  {
    id: "log_005",
    userId: "user_123",
    username: "johndoe",
    action: "Invested in Target Savings",
    targetAmount: 5000.00,
    currency: "NGN",
    duration: 6, // months
    timestamp: "2024-05-15 15:30:00",
  },
  // Add more activity logs here
];


export default function page({ params }: { params: { id: string } }) {
  const saving = usersData.find((user) => user.id === params.id);
  const columns = [
    { field: 'id', headerName: 'Transaction ID', width: 150 },
    {
      field: 'type',
      headerName: 'Transaction Type',
      width: 120,
      valueGetter: (params: any) => {
        const type = params.row?.type; // Use optional chaining to access type safely
        return type === 'Savings' ? 'Savings' : type === 'Ajo' ? 'Ajo' : 'Wallet';
      },
    },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'amount', headerName: 'Amount', width: 130 },

    { field: 'status', headerName: 'Status', width: 100 },
    // Add more columns for other transaction properties
  ];
  const activityLogColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'userId', headerName: 'User ID', width: 120 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'action', headerName: 'Action', width: 200 },
    { field: 'timestamp', headerName: 'Timestamp', width: 150 },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const error = theme.palette.error.main;
  const secondary = theme.palette.secondary.light;
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart: any = {
    chart: {
      height: 280,
      type: "radialBar",
    },
  
    series: [67],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Progress"]
  };
  const seriescolumnchart: any = [70];

  return (
    <PageContainer title="Savings ">
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <DashboardCard>
          <div>
            <h1>Friends and family</h1>
            <Grid container>
              <Grid item xs={12} md={6} lg={6} sx={{ marginTop: "20px" }}>
                <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                  <Typography sx={{ marginLeft: "15px" }}>Type:</Typography>
                  <Chip
                    sx={{
                      px: "4px",
                      backgroundColor: 'yellow',
                      color: "black",
                      marginLeft: "10px",
                    }}
                    size="small"
                    label={"Group Target Savings"}
                  ></Chip>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: "8px" }}>
                  <Typography sx={{ marginLeft: "15px" }}>Status:</Typography>
                  <Chip
                    sx={{
                      px: "4px",
                      backgroundColor: 'red',
                      color: "#fff",
                      marginLeft: "10px",
                    }}
                    size="small"
                    label={'Pending'}
                  ></Chip>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  sx={{ marginTop: "20px", marginLeft: "2px" }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconCalendarCheck style={{ color: "grey" }} />

                    <Typography>Plan Created March 2022</Typography>
                  </Stack>

                  {/* <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ marginLeft: "10px" }}
                  onClick={handleOpen}
                  style={{ cursor: "pointer" }}
                >
                  <IconInbox style={{ color: "blue" }} />

                  <Typography style={{ color: "blue" }}>Message user</Typography>
                </Stack> */}

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                        style={{ marginBottom: "15px" }}
                      >
                        Message User
                      </Typography>
                      <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        sx={{ mr: 1, mb: 1 }}
                      />
                      <TextField
                        label="Type your message..."
                        variant="outlined"
                        fullWidth
                        sx={{ mr: 1, mb: 3 }}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                      >
                        Send
                      </Button>
                    </Box>
                  </Modal>
                </Grid>
              </Grid>


              <Grid item xs={12} md={6} lg={6}>
                <Chart
                  options={optionscolumnchart}
                  series={seriescolumnchart}
                  type="radialBar"
                  width={"100%"}
                  height="200px"
                />
              </Grid>

            </Grid>
          </div>
        </DashboardCard>
      </div>

      <Grid
        container
        spacing={3}
        sx={{ marginBottom: "10px", marginTop: "10px" }}
      >
        <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
          <TotalWallet amount="53,500" title="Week Savings Deposit" />
        </Grid>

        <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
          <SavingsData title="Savings Goal" amount="14.5" />
        </Grid>

        <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
          <SavingsData amount="7" title="Total Savings" />
        </Grid>
      </Grid>

      <DashboardCard>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Saving Details" {...a11yProps(0)} />
              <Tab label="Transactions History" {...a11yProps(1)} />
              <Tab label="Members" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid container spacing={2}>

              <Grid item xs={4}>
                <List dense>
                  <ListItem>
                    <Typography variant="h6">Frequency: </Typography>
                    <Typography> Weekly</Typography>
                  </ListItem>
                  <ListItem>
                  <Typography variant="h6">Withdrawal Date: </Typography>
                    <Typography> Mon 15th April 2025</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h6">Amount: </Typography>
                    <Typography> #2,500</Typography>
                  </ListItem>
                 
                  {/* Add list items for other user information */}
                </List>
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button variant="contained" color="error">
                      Flag Plan
                    </Button>
                  </Grid>
                  {/* <Grid item>
                    <Button variant="outlined">Send Alert</Button>
                  </Grid> */}
                  {/* Add other action buttons here */}
                </Grid>
              </Grid>
            </Grid>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={transaction}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5, 10, 20]}
                autoHeight
                sortingMode="server" // Enable server-side sorting if needed
                filterMode="server" // Enable server-side filtering if needed
              />
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
          <Grid item xs={12} md={6} sx={{ marginBottom: "10px" }}>
            <PlansMember />
          </Grid>
          </CustomTabPanel>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
}
