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

import UserSavingsPlans from "../../components/dashboard/UserSavingsPlan";
import UserAjoPlans from "../../components/dashboard/UserAjoPlans";
import TotalWallet from '../../components/dashboard/TotalWallet';
import SavingsData from '../../components/dashboard/SavingsData';

import usersData from "../../data/users.json";
import { DataGrid } from '@mui/x-data-grid';

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
    "amount": 100.00,
    "description": "Deposit to Savings Account"
  },
  {
    "id": "txn_002",
    "type": "Ajo",
    "date": "2024-05-10",
    "status": "Pending",
    "amount": 50.00,
    "description": "Contribution to Ajo Pool"
  },
  {
    "id": "txn_003",
    "type": "Wallet",
    "date": "2024-05-13",
    "status": "Completed",
    "amount": 25.50,
    "description": "Airtime Purchase"
  },
  {
    "id": "txn_004",
    "type": "Savings",
    "date": "2024-05-08",
    "status": "Success",
    "amount": 75.00,
    "description": "Transfer from Checking Account"
  },
  {
    "id": "txn_005",
    "type": "Wallet",
    "date": "2024-05-12",
    "status": "Failed",
    "amount": 15.00,
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
  const user = usersData.find((user) => user.id === params.id);
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

  return (
    <PageContainer title="Users">
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <DashboardCard>
          <div>
            <h1>{user?.name}</h1>

            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
              <Typography sx={{ marginLeft: "15px" }}>Verification:</Typography>

              <Chip
                sx={{
                  px: "4px",
                  backgroundColor: user?.pbg,
                  color: "#fff",
                  marginLeft: "10px",
                }}
                size="small"
                label={user?.status}
              ></Chip>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{ marginTop: "20px", marginLeft: "2px" }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconCalendarCheck style={{ color: "grey" }} />

                <Typography>Joined March 2022</Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ marginLeft: "10px" }}
              >
                <IconMailCheck style={{ color: "grey" }} />

                <Typography>{user?.email}</Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ marginLeft: "10px" }}
                onClick={handleOpen}
                style={{ cursor: "pointer" }}
              >
                <IconInbox style={{ color: "blue" }} />

                <Typography style={{ color: "blue" }}>Message user</Typography>
              </Stack>

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
          </div>
        </DashboardCard>
      </div>

      <Grid
        container
        spacing={3}
        sx={{ marginBottom: "10px", marginTop: "10px" }}
      >
        <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
          <TotalWallet amount="53,500" title="Wallet Balance" />
        </Grid>

        <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
          <SavingsData title="Savings Balance" amount="14.5" />
        </Grid>

        <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
          <SavingsData amount="7" title="Total Savings Plans" />
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
              <Tab label="User Details" {...a11yProps(0)} />
              <Tab label="Transactions" {...a11yProps(1)} />
              <Tab label="Activity Log" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Grid container direction="column" alignItems="center">
                  <Grid item>
                    <Avatar alt="User Avatar" sx={{ width: 150, height: 150 }} src={user?.avatarUrl} />
                  </Grid>
                  <Grid item sx={{
                    paddingTop: '10px'
                  }}>
                    <Typography variant="body2">{user?.joined}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Email" secondary={user?.email} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Phone Number" secondary={user?.phoneNumber} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="NIN" secondary={user?.nin} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="BVN" secondary={user?.bvn} />
                  </ListItem>
                  {/* Add list items for other user information */}
                </List>
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button variant="contained" color="error">
                      Ban User
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined">Send Alert</Button>
                  </Grid>
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
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={activityLogs}
                columns={activityLogColumns}
                pageSize={10}
                rowsPerPageOptions={[5, 10, 20]}
                autoHeight
                sortingMode="server" // Enable server-side sorting if needed
                filterMode="server" // Enable server-side filtering if needed
              />
            </div>
          </CustomTabPanel>
        </Box>
      </DashboardCard>

      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={12} md={6} sx={{ marginBottom: "10px" }}>
          <UserSavingsPlans />
        </Grid>

        <Grid item xs={12} md={6} sx={{ marginBottom: "10px" }}>
          <UserAjoPlans />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
