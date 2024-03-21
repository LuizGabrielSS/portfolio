import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useSelector } from "react-redux";

import RouteFunction from './routes'

function App(){

  const theme = useSelector((state) => state.mode.darkmode);

  const darkTheme = createTheme({
    palette: theme,
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <RouteFunction/>
    </ThemeProvider>
  );
}

export default App;
