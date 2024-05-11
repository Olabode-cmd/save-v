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
    createdDate: "Created 2 hours ago",
    type: "Top-up",
    pbg: "primary.main",
    amount: "2,000",
    totalAmount: "3.9",
    transactionUser: "Angeline Row",
    time: "30 seconds ago",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    createdDate: "Created 4 hours ago",
    type: "Withdrawal",
    pbg: "success.main",
    amount: "2,500",
    totalAmount: "24.5",
    transactionUser: "Cait Row",
    time: "3 minutes ago",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    createdDate: "Created 4 hours ago",
    type: "Top-up",
    pbg: "primary.main",
    amount: "12,000",
    totalAmount: "12.8",
    transactionUser: "Emily Row",
    time: "2 hours ago",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    createdDate: "Created 1 day ago",
    type: "Withdrawal",
    pbg: "success.main",
    amount: "30,000",
    totalAmount: "2.4",
    transactionUser: "Angeline Row",
    time: "4 hours ago",
  },
];

const AjoTransactions = () => {
  return (
    <DashboardCard title="Recent Transactions (Ajo)">
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
                    Moderator
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
                    Amount
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Total Amount
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
                          {user.createdDate}
                        </Typography>
                      </Box>
                    </Box>
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
                          {user.transactionUser}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {user.time}
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
                      &#8358; {user.amount}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">&#8358; {user.totalAmount}K</Typography>
                  </TableCell>
                  <TableCell align="right">
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

export default AjoTransactions;
