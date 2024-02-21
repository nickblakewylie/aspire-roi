import React, { useState } from "react";
import {
  TextField,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
interface WinDealsFormProps {
  revenue: number;
  grossMargin: number;
  netProfitMargin: number;
}
const WinDealsForm = ({
  revenue,
  grossMargin,
  netProfitMargin,
}: WinDealsFormProps) => {
  const [speedImprovement, setSpeedImprovement] = useState<number>(0);
  const [revenueImprovement, setRevenueImprovement] = useState<number>(0);
  const [dealCloseImprovement, setDealCloseImprovement] = useState<number>(0);

  const [annualRevenueImpact, setAnnualRevenueImpact] = useState<number>(0);
  const [annualMarginImpact, setAnnualMarginImpact] = useState<number>(0);

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeedImprovement(Number(e.target.value));
  };
  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRevenueImprovement(Number(e.target.value));
  };
  const handleDealCloseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDealCloseImprovement(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    let percentageImprovement =
      speedImprovement + revenueImprovement + dealCloseImprovement;
    let revenueImpact = Math.round(revenue * (percentageImprovement / 100));
    setAnnualRevenueImpact(revenueImpact);

    let marginImpact = Math.round(revenueImpact * (grossMargin / 100));
    setAnnualMarginImpact(marginImpact);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        borderColor: "primary.main",
        borderWidth: "2px",
        borderStyle: "solid",
        padding: "10px",
        paddingTop: "20px",
      }}
    >
      <form onSubmit={handleSubmit}>
        {/* <Paper
          elevation={3}
          sx={{
            backgroundColor: "primary.main",
            padding: "4px",
          }}
        > */}
        <Typography
          variant="h5"
          component="h2"
          align="left"
          color="primary.dark"
          gutterBottom
        >
          Win more deals and increase revenue to grow faster.
        </Typography>
        {/* </Paper> */}
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Estimate new work 19% faster:</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={speedImprovement}
                  onChange={handleSpeedChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                71% Aspire clients realized improvement in enhancement revenue
                (as a % of total revenue):
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={revenueImprovement}
                  onChange={handleRevenueChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                49% Aspire client realized improvement in deal close rates:
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={dealCloseImprovement}
                  onChange={handleDealCloseChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px", width: "100%" }}
        >
          Submit
        </Button>
      </form>
      <Paper
        elevation={3}
        sx={{
          marginTop: "30px",
          padding: "20px",
          borderColor: "primary.main",
          borderWidth: "2px",
          borderStyle: "solid",
        }}
      >
        <Typography variant="h6" component="h3" gutterBottom>
          Results
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Total Annual Revenue Impact:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>${annualRevenueImpact}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Total Annual Margin $ Impact:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>${annualMarginImpact}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default WinDealsForm;
