"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// Components
import TotalUsers from "@/app/(DashboardLayout)/components/dashboard/TotalUsers";
import SavingsTable from "../components/dashboard/SavingsTable";

const Savings = () => {
  return (
    <PageContainer title="Savings">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <SavingsTable />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Savings;
