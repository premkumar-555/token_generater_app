import * as React from "react";
import { Box, Typography, TextField, Button } from "@mui/material/";
import { getContextValues } from "../contexts/FormContext";
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
  const { formvalues, setformvalues, tokenData, settokenData } =
    getContextValues();
  const handleChanges = (e) => {
    const { id, value } = e.target;
    setformvalues({ ...formvalues, [id]: value });
    console.log(formvalues);
  };
  const generate = () => {
    let values = Object.values(formvalues);
    if (values.filter((ele) => !ele.length).length) {
      console.log("error");
    } else {
      console.log(formvalues);
      let blueRows = Math.ceil(
        +formvalues?.no_of_blue_tokens / +formvalues?.blue_tokens_per_row
      );
      let redRows = Math.ceil(
        +formvalues?.no_of_red_tokens / +formvalues?.red_tokens_per_row
      );
      if (redRows && blueRows) {
        console.log("hddf");
        settokenData({
          blue: {
            rows: blueRows,
            columns: +formvalues?.blue_tokens_per_row,
            prefix: formvalues?.blue_token_prefix,
            color: "blue",
            tokens: +formvalues?.no_of_blue_tokens,
          },
          red: {
            rows: redRows,
            columns: +formvalues?.red_tokens_per_row,
            prefix: formvalues?.red_token_prefix,
            color: "red",
            tokens: +formvalues?.no_of_red_tokens,
          },
        });
        console.log(tokenData);
      }
    }
  };

  const clear = () => {
    settokenData({});
  };
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
          onChange={(e) => handleChanges(e)}
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
          onChange={(e) => handleChanges(e)}
          type="text"
          id="blue_token_prefix"
          size="small"
          variant="outlined"
        />
      </Box>
      <Box sx={boxStyles}>
        <Typography variant="h6" display="block" gutterBottom>
          Blue token per row
        </Typography>
        <TextField
          onChange={(e) => handleChanges(e)}
          id="blue_tokens_per_row"
          type="number"
          size="small"
          variant="outlined"
        />
      </Box>

      <Box sx={boxStyles}>
        <Typography variant="h6" display="block" gutterBottom>
          Number of red tokens
        </Typography>
        <TextField
          onChange={(e) => handleChanges(e)}
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
          onChange={(e) => handleChanges(e)}
          type="text"
          id="red_token_prefix"
          size="small"
          variant="outlined"
        />
      </Box>
      <Box sx={boxStyles}>
        <Typography variant="h6">Red token per row</Typography>
        <TextField
          onChange={(e) => handleChanges(e)}
          id="red_tokens_per_row"
          type="number"
          size="small"
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
          onClick={() => generate()}
        >
          Generate
        </Button>
        <Button
          onClick={() => clear()}
          variant="contained"
          color="error"
          sx={{ ...noTextTrnsform }}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
}
