"use client";

import * as React from "react";
import {
  Grid,
  Chip,
  Box,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import AllUsers from "../../components/dashboard/AllUsers";
import { DataGrid } from "@mui/x-data-grid";
import membersData from "../../data/users.json";

import { green, red, grey } from "@mui/material/colors";

const getStatusColor = (status: string | undefined) => {
  switch (status) {
    case "Active":
      return green[500];
    case "Closed":
      return red[500];
    case "Inactive":
      return grey[500];
    default:
      return "inherit"; // Fallback color
  }
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const sampleData = [
  {
    id: "SAV001",
    name: "Sunil Joshi",
    createdBy: "Sunil Joshi",
    status: "Active",
    amount: "39,000",
    ajoName: "Grace Estate Ajo",
    nextUser: "Auntie Mary",
    members: 13,
  },
  {
    id: "SAV002",
    name: "Andrew McDownland",
    createdBy: "Andrew McDownland",
    status: "Closed",
    amount: "21,450",
    ajoName: "Community Savings",
    nextUser: "Angelina Jolie",
    members: 8,
  },
];


export default function page({ params }: { params: { id: string } }) {
  const data = sampleData.find((user) => user.id === params.id);
  const statusColor = getStatusColor(data?.status);

  const membersColumns = [
    { field: "id", headerName: "User ID", width: 150 },
    { field: "name", headerName: "Member Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phoneNumber", headerName: "Phone", width: 150 },
    { field: "joined", headerName: "Joined", width: 150 },
  ];

  return (
    <PageContainer title="Ajo">
      <Box sx={{ marginBottom: "15px" }}>
        <DashboardCard>
          <Box>
            <h1>{data?.ajoName}</h1>
            <Chip
              sx={{ backgroundColor: statusColor, color: "white" }}
              label={data?.status}
            />

            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
              <Typography sx={{ marginRight: "15px", marginLeft: "15px" }}>
                Created By:
              </Typography>
              <Typography variant="h6">{data?.createdBy}</Typography>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
              <Typography sx={{ marginRight: "15px", marginLeft: "15px" }}>
                Total members:
              </Typography>
              <Typography variant="h6">{data?.members}</Typography>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
              <Typography sx={{ marginRight: "15px", marginLeft: "15px" }}>
                Total amount:
              </Typography>
              <Typography variant="h6">{data?.amount}</Typography>
            </Grid>
          </Box>
        </DashboardCard>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
          <AllUsers title="Total Members" value="17" showFooter={true} />
        </Grid>

        <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
          <AllUsers title="Total Amount" value="230,000.00" showFooter={true} />
        </Grid>

        <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
          <DashboardCard>
            <Box>
              <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                Next User
              </Typography>

              <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap>
                <Avatar
                  src="../../../images/profile/user-1.jpg"
                  alt="image"
                  sx={{
                    width: 65,
                    height: 65,
                  }}
                />
                <Typography variant="h6">{data?.nextUser}</Typography>
              </Stack>
            </Box>
          </DashboardCard>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: "20px" }}>
        <DashboardCard>
          <Grid container spacing={3}>
            <Typography
              variant="h4"
              sx={{
                marginBottom: "20px",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            >
              All Members
            </Typography>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={membersData}
                columns={membersColumns}
                pageSize={10}
                rowsPerPageOptions={[5, 10, 20]}
                autoHeight
                sortingMode="server" // Enable server-side sorting if needed
                filterMode="server" // Enable server-side filtering if needed
              />
            </div>
          </Grid>
        </DashboardCard>
      </Box>
    </PageContainer>
  );
}
