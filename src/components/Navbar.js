import React from "react";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import Timer from "./Timer";
import PositionContext from "../context/PositionContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f5f5f5",
    },
  },
});

const Navbar = () => {
  const { position, setPosition } = React.useContext(PositionContext);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ScopedCssBaseline>
          <AppBar sx={{ backgroundColor: "#000000" }}>
            <Toolbar disableGutters>
              <Grid
                direction="row"
                alignItems="center"
                justifyContent="space-around"
                container
                sx={{ px: 2 }}
              >
                {/* Radio button group */}
                <Grid item>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      <FormControlLabel
                        value={1}
                        control={<Radio />}
                        label="Top-Right"
                      />
                      <FormControlLabel
                        value={2}
                        control={<Radio />}
                        label="Top-Left"
                      />
                      <FormControlLabel
                        value={3}
                        control={<Radio />}
                        label="Bottom-Right"
                      />
                      <FormControlLabel
                        value={4}
                        control={<Radio />}
                        label="Center"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* Time */}
                <Grid item>
                  <Timer></Timer>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </ScopedCssBaseline>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
