'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import GrowthStatistics from '@/app/(DashboardLayout)/components/dashboard/GrowthStatistics';
import TotalAjo from '@/app/(DashboardLayout)/components/dashboard/TotalAjo';
import SavingsData from './components/dashboard/SavingsData';
import WithdrawalRequest from './components/dashboard/WithdrawalRequest';
import AllUsers from './components/dashboard/AllUsers';
import TotalWallet from './components/dashboard/TotalWallet';
import SavingsTransactions from './components/dashboard/SavingsTransactions';
import AjoTransactions from './components/dashboard/AjoTransactions';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "20px" }}>
            <AllUsers title="Total Users" value="70" showFooter={true}/>
          </Grid>

          <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "20px" }}>
            <TotalAjo />
          </Grid>

          <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "20px" }}>
            <SavingsData title="Total Savings" amount="44.5" />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
          <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "20px" }}>
            <Box marginBottom={4}>
              <TotalWallet amount="40,000" title="Total Wallet" />
            </Box>

            <WithdrawalRequest />
          </Grid>
          <Grid item xs={12} lg={8}>
            <GrowthStatistics />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ marginBottom: "20px" }}>
            <SavingsTransactions />
          </Grid>

          <Grid item xs={12} md={6} sx={{ marginBottom: "20px" }}>
            <AjoTransactions />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default Dashboard;
