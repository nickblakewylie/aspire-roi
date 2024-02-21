import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainForm from "./forms/MainForm";
import WinDealsForm from "./forms/WinDealsForm";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
      dark: "#357a38",
    },
    // You can also customize other colors here
  },
  // You can add more theme customizations here
});

function App() {
  const [revenue, setRevenue] = useState<number>(0);
  const [grossMargin, setGrossMargin] = useState<number>(0);
  const [netProfitMargin, setNetProfitMargin] = useState<number>(0);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>ROI investment calculator</h1>
        <MainForm
          revenue={revenue}
          setRevenue={setRevenue}
          grossMargin={grossMargin}
          setGrossMargin={setGrossMargin}
          netProfitMargin={netProfitMargin}
          setNetProfitMargin={setNetProfitMargin}
        />
        <WinDealsForm
          revenue={revenue}
          grossMargin={grossMargin}
          netProfitMargin={netProfitMargin}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
