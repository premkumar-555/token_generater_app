import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
const theme = createTheme();
responsiveFontSizes(theme);
export default function ElevateAppBar(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ paddingLeft: "1rem", position: "fixed" }}>
        <Toolbar>
          <Typography variant="h6">Token Generator</Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
