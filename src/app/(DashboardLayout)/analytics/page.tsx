"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// Components
import TotalUsers from "@/app/(DashboardLayout)/components/dashboard/TotalUsers";
import AllUsers from "../components/dashboard/AllUsers";
import TotalAjo from "../components/dashboard/TotalAjo";
import SavingsData from "../components/dashboard/SavingsData";
import GrowthStatistics from "../components/dashboard/GrowthStatistics";
import TotalWallet from "../components/dashboard/TotalWallet";
import WithdrawalRequest from "../components/dashboard/WithdrawalRequest";

const Analytics = () => {
    return (
      <PageContainer title="Analytics">
        <Box>
          <Grid container spacing={3}>
            <Grid item>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
                  <AllUsers
                    title="Total Ajo Plans"
                    value="700"
                    showFooter={true}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
                  <AllUsers
                    title="Total Members"
                    value="690"
                    showFooter={true}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
                  <TotalAjo />
                </Grid>

                <Grid item md={12} lg={12}>
                  <Grid container spacing={3} sx={{ marginBottom: "10px" }}>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={4}
                      sx={{ marginBottom: "20px" }}
                    >
                      <Box marginBottom={4}>
                        <TotalWallet amount="40,000" title="Total Wallet" />
                      </Box>

                      <WithdrawalRequest />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                      <GrowthStatistics />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
                  <AllUsers
                    title="Combined Wallet"
                    value="970,000"
                    showFooter={true}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
                  <AllUsers
                    title="Total Members"
                    value="690"
                    showFooter={true}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "20px" }}>
                  <SavingsData title="Total Savings" amount="44.5" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
}

export default Analytics