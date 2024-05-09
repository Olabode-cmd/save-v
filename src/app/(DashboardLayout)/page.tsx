'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import RecentUserActivity from '@/app/(DashboardLayout)/components/dashboard/RecentUserActivity';
import TotalAjo from '@/app/(DashboardLayout)/components/dashboard/TotalAjo';
import TotalUsers from '@/app/(DashboardLayout)/components/dashboard/TotalUsers';
import SavingsData from './components/dashboard/SavingsData';
import AllUsers from './components/dashboard/AllUsers';
import TotalWallet from './components/dashboard/TotalWallet';
import SavingsTransactions from './components/dashboard/SavingsTransactions';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
            <AllUsers />
          </Grid>

          <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
            <TotalAjo />
          </Grid>

          <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
            <SavingsData />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "10px" }}>
            <TotalWallet />
          </Grid>
          <Grid item xs={12} lg={8}>
            <RecentUserActivity />
          </Grid>
          {/* <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TotalAjo />
              </Grid>
              <Grid item xs={12}>
                <SavingsData />
              </Grid>
            </Grid>
          </Grid> */}
          {/* <Grid item xs={12} lg={4}>
            <UpcomingSchedules />
          </Grid> */}
          <Grid item xs={12} lg={12} sx={{ marginBottom: "10px" }}>
            <TotalUsers />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ marginBottom: "10px" }}>
            <SavingsTransactions />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default Dashboard;
