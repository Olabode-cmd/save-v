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
import usersData from '../../data/users.json'

import Link from "next/link";

// const users = [
//   {
//     id: "1",
//     name: "Sunil Joshi",
//     joined: "Joined 2 days ago",
//     email: "suni@yahoo.com",
//     status: "Pending",
//     pbg: "secondary.main",
//     savings: "3.9",
//   },
//   {
//     id: "2",
//     name: "Andrew McDownland",
//     joined: "Joined 4 days ago",
//     email: "andrewmc@gmail.com",
//     status: "Pending",
//     pbg: "secondary.main",
//     savings: "24.5",
//   },
//   {
//     id: "3",
//     name: "Christopher Jamil",
//     joined: "Joined 2 weeks ago",
//     email: "chris@outlook.com",
//     status: "Verified",
//     pbg: "success.main",
//     savings: "12.8",
//   },
//   {
//     id: "4",
//     name: "Nirav Joshi",
//     joined: "Joined 3 weeks ago",
//     email: "nirav77@gmail.com",
//     status: "Verified",
//     pbg: "success.main",
//     savings: "2.4",
//   },
// ];

const TotalUsers = () => {
  return (
    <DashboardCard title="Total Users">
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
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Verified?
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Wallet
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
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {user.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: user.pbg,
                        color: "#fff",
                      }}
                      size="small"
                      label={user.status}
                    ></Chip>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">
                      &#8358; {user.wallet}K
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Link href={`/users/${user.id}`}>
                      <Button variant="contained">View user</Button>
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

export default TotalUsers;
