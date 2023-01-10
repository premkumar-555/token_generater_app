import * as React from "react";
import { Box, Typography, TextField, Button } from "@mui/material/";

const boxStyles = {
  width: "55%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const noTextTrnsform = {
  textTransform: "none",
  fontSize: "16px",
};
export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        width: "55%",
        "& > :not(style)": { m: 1 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={boxStyles}>
        <Typography variant="h6" display="block" gutterBottom>
          Number of blue tokens
        </Typography>
        <TextField
          size="small"
          id="no_of_blue_tokens"
          type="number"
          variant="outlined"
        />
      </Box>
      <Box sx={boxStyles}>
        <Typography variant="h6" display="block" gutterBottom>
          Blue token prefix
        </Typography>
        <TextField
          type="text"
          id="blue_token_prefix"
          size="small"
          id="outlined-basic"
          variant="outlined"
        />
      </Box>
      <Box sx={boxStyles}>
        <Typography variant="h6" display="block" gutterBottom>
          Blue token per row
        </Typography>
        <TextField
          id="blue_tokens_per_row"
          type="number"
          size="small"
          id="outlined-basic"
          variant="outlined"
        />
      </Box>

      <Box sx={boxStyles}>
        <Typography variant="h6" display="block" gutterBottom>
          Number of red tokens
        </Typography>
        <TextField
          size="small"
          id="no_of_red_tokens"
          type="number"
          variant="outlined"
        />
      </Box>
      <Box sx={boxStyles}>
        <Typography variant="h6" display="block" gutterBottom>
          Red token prefix
        </Typography>
        <TextField
          type="text"
          id="red_token_prefix"
          size="small"
          id="outlined-basic"
          variant="outlined"
        />
      </Box>
      <Box sx={boxStyles}>
        <Typography variant="h6">Red token per row</Typography>
        <TextField
          id="red_tokens_per_row"
          type="number"
          size="small"
          id="outlined-basic"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          ...boxStyles,
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{ mr: "3rem", ...noTextTrnsform }}
          variant="contained"
          color="success"
        >
          Generate
        </Button>
        <Button variant="contained" color="error" sx={{ ...noTextTrnsform }}>
          Clear
        </Button>
      </Box>
    </Box>
  );
}
