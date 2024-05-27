"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// Components
import TotalUsers from "@/app/(DashboardLayout)/components/dashboard/TotalUsers";
import AjoTable from "../components/dashboard/AjoTable";
import AllUsers from "../components/dashboard/AllUsers";

const Ajo = () => {
  return (
    <PageContainer title="Ajo">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
            <AllUsers title="Total Ajo Plans" value="700" showFooter={true} />
          </Grid>

            <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
              <AllUsers title="Total Members" value="690" showFooter={true} />
            </Grid>

            <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
              <AllUsers
                title="Combined Wallet"
                value="970,000"
                showFooter={true}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} lg={12}>
            <AjoTable />
          </Grid>
      </Box>
    </PageContainer>
  );
};

export default Ajo;
