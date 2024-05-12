/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import * as React from 'react';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import { Grid, Box, Typography, Chip, Stack, Tab, Tabs } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { IconCalendarCheck, IconMailCheck } from "@tabler/icons-react";

import UserSavingsPlans from "../../components/dashboard/UserSavingsPlan";
import UserAjoPlans from "../../components/dashboard/UserAjoPlans";
import TotalWallet from '../../components/dashboard/TotalWallet';
import SavingsData from '../../components/dashboard/SavingsData';

import usersData from "../../data/users.json";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

export default function page({ params }: { params: { id: string } }) {
  const user = usersData.find((user) => user.id === params.id);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Item One
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
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
