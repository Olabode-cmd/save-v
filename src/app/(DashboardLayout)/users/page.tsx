"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// Components
import TotalUsers from "@/app/(DashboardLayout)/components/dashboard/TotalUsers";

const Users = () => {
    return (
      <PageContainer title="Users">
        <Box>
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