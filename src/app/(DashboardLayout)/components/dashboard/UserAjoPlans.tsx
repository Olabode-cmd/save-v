import {
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Paper,
  Stack,
} from "@mui/material";
import { IconChevronRight } from "@tabler/icons-react";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";

import Link from "next/link";

const usersData = [
  {
    id: "1",
    name: "Macbook Savings",
    created: "2 hours ago",
    amount: "20,000",
  },
  {
    id: "2",
    name: "Tuition fees",
    created: "2 days ago",
    amount: "25,000",
  },
  {
    id: "3",
    name: "Christmas Savings",
    created: "3 days ago",
    amount: "20,000",
  },
];

const UserAjoPlans = () => {
  return (
    <DashboardCard title="Ajo Plans">
      <Stack spacing={2}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Box style={{padding: "15px"}}
            sx={{
              borderRadius: 1,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            <Stack direction="row" justifyContent="space-between">
                <Typography style={{ color: "white" }}>Community Ajo</Typography>
                <IconChevronRight style={{color: "white"}} />
            </Stack>
          </Box>
        </Link>
        
      </Stack>
    </DashboardCard>
  );
};

export default UserAjoPlans;
