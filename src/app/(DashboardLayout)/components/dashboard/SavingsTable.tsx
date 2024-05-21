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
  Grid,
} from "@mui/material";
import { IconFilePencil } from "@tabler/icons-react";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import TableContainer from "@mui/material/TableContainer";
import BlankCard from "../shared/BlankCard";
import { DataGrid } from '@mui/x-data-grid';
import Link from "next/link";
import { useReducer } from "react";
import AllUsers from "./AllUsers";
import { useRouter } from 'next/navigation'

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

const sampleData = [
  {
    id: 'savings_001',
    userId: 'user_123',
    username: 'John Doe', // Optional
    planType: 'Target',
    planName: 'Emergency Fund',
    currentBalance: 1000.00,
    lastDeposit: '2024-05-15',
    totalDeposits: 2000.00,
  },
  {
    id: 'savings_002',
    userId: 'user_456',
    username: 'Jane Doe', // Optional
    planType: 'Target',
    planName: 'Vacation Savings',
    currentBalance: 500.00,
    lastDeposit: '2024-05-14',
    totalDeposits: 500.00,
  },
  // Group Savings Data
  {
    id: 'savings_003',
    userId: 'user_789',
    username: 'Alice', // Optional
    planType: 'Group',
    planName: 'Family Savings Pool',
    currentBalance: 750.00,
    lastDeposit: '2024-05-13',
    totalDeposits: 1250.00,
  },
  {
    id: 'savings_004',
    userId: 'user_012',
    username: 'Bob', // Optional
    planType: 'Group',
    planName: 'Investment Club',
    currentBalance: 1500.00,
    lastDeposit: '2024-05-12',
    totalDeposits: 2000.00,
  }
]

interface UserSavings {
  id: string;
  userId: string;
  username: string; // Optional
  planType: 'Target' | 'Group'; // Differentiate between target and group savings
  planName: string;
  currentBalance: number;
  lastDeposit: string; // Date of last deposit
  totalDeposits: number;
  // Add other properties as needed
}

const PlanTypeCell: React.FC<{ value: 'Target' | 'Group' }> = ({ value }) => {
  return <div>{value === 'Target' ? 'Target Savings' : 'Group Savings'}</div>;
};

const ActionCell: React.FC<{ row: UserSavings }> = ({ row }) => {
  const router = useRouter()
  const handleViewDetails = () => {
    // Implement logic to handle viewing user's savings details (e.g., navigate to a detail page)
    router.push(`/savings/${row.userId}`);
    // Next 
  };

  return (
    <Grid container justifyContent="center">
      <Button variant="outlined" size="small" onClick={handleViewDetails}>
        View Details
      </Button>
    </Grid>
  );
};

const SavingsTable = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'username', headerName: 'Username', width: 120, hideable: true }, // Optional, hideable
    {
      field: 'planType',
      headerName: 'Plan Type',
      width: 120,
      renderCell: PlanTypeCell,
    },
    { field: 'planName', headerName: 'Plan Name', width: 150 },
    { field: 'currentBalance', headerName: 'Current Balance', width: 130 },
    { field: 'lastDeposit', headerName: 'Last Deposit', width: 120 },
    { field: 'totalDeposits', headerName: 'Total Deposits', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: ActionCell,
    },
  ];
  return (
    <DashboardCard title="All Active Savings Plans">
      <Box sx={{ overflow: "auto" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3} sx={{ marginBottom: "10px" }}>
            <AllUsers title="Total Savings Plan" value="700" />
          </Grid>

          <Grid item xs={12} md={6} lg={3} sx={{ marginBottom: "10px" }}>
            <AllUsers title="Total Savings Balance" value="230,000.00" />
          </Grid>

          <Grid item xs={12} md={6} lg={3} sx={{ marginBottom: "10px" }}>
            <AllUsers title="New Saver" value="6" />
          </Grid>

          <Grid item xs={12} md={6} lg={3} sx={{ marginBottom: "10px" }}>
            <AllUsers title="Total Deposit" value="6" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <DataGrid
              rows={sampleData}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5, 10, 20]}
              autoHeight
              sortingMode="server" // Enable server-side sorting if needed
              filterMode="server" // Enable server-side filtering if needed
            />
          </Grid>
        </Grid>
      </Box>
    </DashboardCard>
  );
};

export default SavingsTable;
