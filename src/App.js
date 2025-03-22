import React from 'react';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useSelector } from "react-redux";


import RoutesFunction from "./routes";

function App() {

  const theme = useSelector((state) => state.mode.mode);

  const darkTheme = React.useMemo(() => createTheme({ palette: theme }), [theme]);

  return (
    <ThemeProvider theme={darkTheme}>
      <RoutesFunction/>
    </ThemeProvider>
  );
}

export default App;
