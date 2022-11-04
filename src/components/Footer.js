import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f5f5f5",
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ScopedCssBaseline>
        <Box sx={{ py: 1 }}>
          <Typography variant="body1" align="center">
            Made with ❤️
          </Typography>
          <Typography variant="body2" align="center">
            by Ayush A. Kumar
          </Typography>
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};

export default Footer;
