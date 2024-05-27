import {
  Typography,
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Paper,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import Link from "next/link";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";

const sampleData = [
  {
    id: "SAV001",
    name: "Sunil Joshi",
    createdBy: "Sunil Joshi",
    status: "Active",
    amount: "39,000",
    ajoName: "Grace Estate Ajo",
    nextUser: "Auntie Mary",
    members: 13,
  },
  {
    id: "SAV002",
    name: "Andrew McDownland",
    createdBy: "Andrew McDownland",
    status: "Closed",
    amount: "21,450",
    ajoName: "Community Savings",
    nextUser: "Angelina Jolie",
    members: 8,
  },
];

interface AjoTables {
  id: string;
  userId: string;
  created: string; // Optional
  ajo: string;
  ajoName: number;
  status: 'Active' | 'Inactive' | 'Closed';
  nextUser: string;
  members: number;
  // Add other properties as needed
}

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const StatusCellWrapper = styled("div")(({ theme, value }) => ({
  color: value === "Active" ? "green" : value === "Inactive" ? "grey" : "red",
  fontWeight: "bold",
}));


const StatusCell: React.FC<{ value: "Active" | "Inactive" | "Closed" }> = ({
  value,
}) => {
  let statusText = "";

  // Use a conditional statement to handle each possible value
  if (value === "Active") {
    statusText = "Active";
  } else if (value === "Inactive") {
    statusText = "Inactive";
  } else if (value === "Closed") {
    statusText = "Closed";
  } else {
    statusText = "Unknown"; // Handle unknown status values gracefully
  }

  return (
    <StatusCellWrapper value={value}>
      <div>{statusText}</div>
    </StatusCellWrapper>
  );
};


const ActionButton: React.FC<{ row: AjoTables }> = ({ row }) => {
  const router = useRouter();
  const handleViewDetails = () => {
    // Implement logic to handle viewing user's savings details (e.g., navigate to a detail page)
    router.push(`/ajo/${row.id}`);
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

const AjoTable = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "createdBy", headerName: "Created By", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: StatusCell,
    },
    { field: "amount", headerName: "Amount", width: 100 },
    { field: "ajoName", headerName: "Ajo Name", width: 150 },
    { field: "members", headerName: "Members", width: 80 },
    { field: "nextUser", headerName: "Next Ajo Collector", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 125,
      renderCell: (params) => <ActionButton {...params} />,
    },
  ];

  return (
     <DashboardCard title="Customer Ajo List">
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
  )
}

export default AjoTable;
