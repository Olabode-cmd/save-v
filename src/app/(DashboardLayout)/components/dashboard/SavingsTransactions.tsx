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
} from "@mui/material";
import { IconFilePencil } from "@tabler/icons-react";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import TableContainer from "@mui/material/TableContainer";
import BlankCard from "../shared/BlankCard";
// import usersData from "../../data/users.json";

import Link from "next/link";

const usersData = [
  {
    id: "1",
    name: "Sunil Joshi",
    joined: "2 hours ago",
    type: "Top-up",
    pbg: "primary.main",
    amount: "3.9",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    joined: "4 hours ago",
    type: "Withdrawal",
    pbg: "success.main",
    amount: "24.5",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    joined: "4 hours ago",
    type: "Top-up",
    pbg: "primary.main",
    amount: "12.8",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    joined: "1 day ago",
    type: "Withdrawal",
    pbg: "success.main",
    amount: "2.4",
  },
];

const SavingsTransactions = () => {
  return (
    <DashboardCard title="Recent Transactions (Savings)">
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <Table
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    User
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Type
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Savings
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersData.map((user) => (
                <TableRow key={user.name}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {user.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {user.name}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {user.joined}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: user.pbg,
                        color: "#fff",
                      }}
                      size="small"
                      label={user.type}
                    ></Chip>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">
                      &#8358; {user.amount}K
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Link href={`/users/${user.id}`}>
                      <Button variant="contained">View details</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </DashboardCard>
  );
};

export default SavingsTransactions;
