"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// Components
import TotalUsers from "@/app/(DashboardLayout)/components/dashboard/TotalUsers";
import SavingsTable from "../components/dashboard/SavingsTable";
import AllUsers from "../components/dashboard/AllUsers";

const Savings = () => {
  return (
    <PageContainer title="Savings">
      <Box>
        <Grid container spacing={3}>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3} sx={{ marginBottom: "10px" }}>
                <AllUsers
                  title="Total Savings Plan"
                  value="700"
                  // showFooter={false}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={3} sx={{ marginBottom: "10px" }}>
                <AllUsers title="Total Savings Balance" value="230,000.00" />
              </Grid>

              <Grid item xs={12} md={6} lg={3} sx={{ marginBottom: "10px" }}>
                <AllUsers title="New Saver" value="6" />
              </Grid>

              <Grid item xs={12} md={6} lg={3} sx={{ marginBottom: "10px" }}>
                <AllUsers title="Total Deposit" value="6" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={12}>
            <SavingsTable />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Savings;
