"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import AllUsers from "@/app/(DashboardLayout)/components/dashboard/AllUsers";

// Components
import TotalUsers from "@/app/(DashboardLayout)/components/dashboard/TotalUsers";

const Users = () => {
    return (
      <PageContainer title="Users">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
              <AllUsers title="Total Users" value="70" />
            </Grid>

            <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
              <AllUsers title="Active Users" value="55" />
            </Grid>

            <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
              <AllUsers title="Banned Users" value= "6"  />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <TotalUsers />
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
}

export default Users;