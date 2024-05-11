"use client";

import { usePathname } from "next/navigation";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

import usersData from "../../data/users.json";

export default function page({ params }: { params: { id: string } }){
    // Fetch user data based on the ID (you can use the users array or make an API call)
    const user = usersData.find((user) => user.id === params.id);
  return (
    <PageContainer title="Users">
      <Box>
        <div>
          <h1>User Profile</h1>
          <p>ID: {user?.id}</p>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          {/* Display other user information */}
        </div>
      </Box>
    </PageContainer>
  );
};

