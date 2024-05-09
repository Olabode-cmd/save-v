'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import RecentUserActivity from '@/app/(DashboardLayout)/components/dashboard/RecentUserActivity';
import TotalAjo from '@/app/(DashboardLayout)/components/dashboard/TotalAjo';
import UpcomingSchedules from '@/app/(DashboardLayout)/components/dashboard/UpcomingSchedules';
import TotalUsers from '@/app/(DashboardLayout)/components/dashboard/TotalUsers';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import SavingsData from './components/dashboard/SavingsData';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <RecentUserActivity />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TotalAjo />
              </Grid>
              <Grid item xs={12}>
                <SavingsData />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} lg={4}>
            <UpcomingSchedules />
          </Grid> */}
          <Grid item xs={12} lg={12}>
            <TotalUsers />
          </Grid>
          {/* <Grid item xs={12}>
            <Blog />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
