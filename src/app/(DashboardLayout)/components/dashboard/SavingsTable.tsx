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

import Link from "next/link";

const usersData = [
  {
    id: "SAV001",
    name: "Sunil Joshi",
    created: "Created 2 days ago",
    email: "suni@yahoo.com",
    status: "Pending",
    pbg: "secondary.main",
    savings: "39,000",
    savingsName: "Sunil Macbook Savings",
  },
  {
    id: "SAV002",
    name: "Andrew McDownland",
    created: "Created 4 days ago",
    email: "andrewmc@gmail.com",
    status: "Pending",
    pbg: "secondary.main",
    savings: "21,450",
    savingsName: "Andrew tuition Savings",
  },
  {
    id: "SAV003",
    name: "Christopher Jamil",
    created: "Created 2 weeks ago",
    email: "chris@outlook.com",
    status: "Verified",
    pbg: "success.main",
    savings: "12,900",
    savingsName: "Christmas Savings",
  },
  {
    id: "SAV004",
    name: "Nirav Joshi",
    created: "Created 3 weeks ago",
    email: "nirav77@gmail.com",
    status: "Verified",
    pbg: "success.main",
    savings: "55,200",
    savingsName: "Nirav tuition",
  },
];

const SavingsTable = () => {
  return (
    <DashboardCard title="Customer Savings List">
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
                    User
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Amount
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
                          {user.savingsName}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {user.created}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">
                      {user.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">
                      &#8358; {user.savings}
                    </Typography>
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

export default SavingsTable;
