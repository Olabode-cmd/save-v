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
import { useReducer } from "react";

const SavingsData = [
  {
    id: "SAV001",
    user: "Segun Adams",
    created: "Created 2 days ago",
    amount: "39,000",
    savingsName: "Sunil Macbook",
    type: "Target",
    goal: "500,000",
  },
  {
    id: "SAV002",
    useReducer: "Boluwatife Alao",
    created: "Created 4 days ago",
    savingsName: "Ojo Ola Birthday",
    type: "Group",
    goal: "300,000",
    amount: "150,000",
  },
  {
    id: "SAV003",
    user: "Christopher Jamil",
    created: "Created 2 weeks ago",
    savingsName: "Christmas Savings",
    type: "Target",
    goal: "100,000",
    amount: "5,000",
  },
  {
    id: "SAV004",
    user: "Christopher Jamil",
    created: "Created 10 months ago",
    savingsName: "Car Savings",
    type: "Target",
    goal: "10,000,000",
    amount: "500,000",
  },
];

const SavingsTable = () => {
  return (
    <DashboardCard title="All Active Savings Plans">
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
                    Name
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Created By
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Amount
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Goal
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Savings Type
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
              {SavingsData.map((savings) => (
                <TableRow key={savings.id}>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {savings.savingsName}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {savings.created}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Typography variant="h6">{savings.user}</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="h6">
                      &#8358; {savings.amount}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="h6">&#8358; {savings.goal}</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="h6">{savings.type}</Typography>
                  </TableCell>
                  <TableCell>
                    <Link href={`/savings/${savings.id}`}>
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
