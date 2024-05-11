"use client";

import { usePathname } from "next/navigation";
import { Grid, Box, Typography, Chip, Stack } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { IconCalendarCheck, IconMailCheck } from "@tabler/icons-react";

import UserSavingsPlans from "../../components/dashboard/UserSavingsPlan";
import UserAjoPlans from "../../components/dashboard/UserAjoPlans";

import usersData from "../../data/users.json";

export default function page({ params }: { params: { id: string } }) {
  const user = usersData.find((user) => user.id === params.id);
  return (
    <PageContainer title="Users">
      <DashboardCard>
        <div>
          <h1>{user?.name}</h1>

          <Grid container spacing={2} sx={{ marginTop: "20px" }}>
            <Typography sx={{ marginLeft: "15px" }}>Verification:</Typography>

            <Chip
              sx={{
                px: "4px",
                backgroundColor: user?.pbg,
                color: "#fff",
                marginLeft: "10px",
              }}
              size="small"
              label={user?.status}
            ></Chip>
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{ marginTop: "20px", marginLeft: "2px" }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconCalendarCheck style={{ color: "grey" }} />

              <Typography>Joined March 2022</Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ marginLeft: "10px" }}
            >
              <IconMailCheck style={{ color: "grey" }} />

              <Typography>{user?.email}</Typography>
            </Stack>
          </Grid>
        </div>
      </DashboardCard>

      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={12} md={6} sx={{ marginBottom: "10px" }}>
          <UserSavingsPlans />
        </Grid>

        <Grid item xs={12} md={6} sx={{ marginBottom: "10px" }}>
          <UserAjoPlans />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
