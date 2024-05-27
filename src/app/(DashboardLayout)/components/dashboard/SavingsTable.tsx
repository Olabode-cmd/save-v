import {
  Box,
  Button,
  Grid,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation'

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
      <Button
        variant="contained"
        size="small"
        sx={{ padding: "5px 20px" }}
        onClick={handleViewDetails}
      >
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
      width: 125,
      renderCell: ActionCell,
    },
  ];
  return (
    <DashboardCard title="All Active Savings Plans">
      <Box sx={{ overflow: "scrollable" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
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
      </Box>
    </DashboardCard>
  );
};

export default SavingsTable;
