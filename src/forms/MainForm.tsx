import React from "react";
import {
  TextField,
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
interface MainFormProps {
  revenue: number;
  setRevenue: (value: number) => void;
  grossMargin: number;
  setGrossMargin: (value: number) => void;
  netProfitMargin: number;
  setNetProfitMargin: (value: number) => void;
}

const MainForm = ({
  revenue,
  setRevenue,
  grossMargin,
  setGrossMargin,
  netProfitMargin,
  setNetProfitMargin,
}: MainFormProps) => {
  const handleRevenueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRevenue(Number(event.target.value));
  };

  const handleGrossMarginChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGrossMargin(Number(event.target.value));
  };

  const handleNetProfitMarginChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNetProfitMargin(Number(event.target.value));
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        borderColor: "primary.main",
        borderWidth: "2px",
        borderStyle: "solid",
        padding: "10px",
        paddingTop: "20px",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        align="left"
        color="primary.dark"
        gutterBottom
      >
        Financial Metrics
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Revenue:</TableCell>
            <TableCell>
              <TextField
                type="number"
                value={revenue}
                onChange={handleRevenueChange}
                variant="outlined"
                size="small"
                fullWidth
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gross Margin (%):</TableCell>
            <TableCell>
              <TextField
                type="number"
                value={grossMargin}
                onChange={handleGrossMarginChange}
                variant="outlined"
                size="small"
                fullWidth
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Net Profit Margin (%)</TableCell>
            <TableCell>
              <TextField
                type="number"
                value={netProfitMargin}
                onChange={handleNetProfitMarginChange}
                variant="outlined"
                size="small"
                fullWidth
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default MainForm;
