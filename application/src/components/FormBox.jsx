import * as React from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material/";
import { getContextValues } from "../contexts/FormContext";
const boxStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const fontSizes = { xs: "16px", sm: "18px", md: "20px" };
const textFieldWidth = { width: "30%" };
const boxItemWidth = { xs: "80%", sm: "70%", md: "65%", lg: "50%" };
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
  };
  const generate = () => {
    let values = Object.values(formvalues);
    if (values.filter((ele) => !ele.length).length) {
      alert("Please fill all the credentials!");
    }
    if (
      +formvalues?.blue_tokens_per_row > +formvalues?.no_of_blue_tokens ||
      +formvalues?.red_tokens_per_row > +formvalues?.no_of_red_tokens
    ) {
      alert("tokens/row should not be greater than total number of tokens");
    } else {
      let blueRows = Math.ceil(
        +formvalues?.no_of_blue_tokens / +formvalues?.blue_tokens_per_row
      );
      let redRows = Math.ceil(
        +formvalues?.no_of_red_tokens / +formvalues?.red_tokens_per_row
      );
      if (redRows && blueRows) {
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
      }
    }
  };

  const clear = () => {
    settokenData({});
    setformvalues({});
    window.location.reload();
  };
  return (
    <Box
      width={{ xs: "100%", sm: "70%", md: "65%", lg: "65%" }}
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Box width={boxItemWidth} sx={boxStyles}>
        <Typography
          variant="h6"
          fontSize={fontSizes}
          display="block"
          gutterBottom
        >
          Number of blue tokens
        </Typography>
        <TextField
          sx={{ ...textFieldWidth }}
          fontSize={fontSizes}
          onChange={(e) => handleChanges(e)}
          size="small"
          id="no_of_blue_tokens"
          type="number"
          variant="outlined"
        />
      </Box>
      <Box width={boxItemWidth} sx={boxStyles}>
        <Typography
          fontSize={fontSizes}
          variant="h6"
          display="block"
          gutterBottom
        >
          Blue token prefix
        </Typography>
        <TextField
          sx={{ ...textFieldWidth }}
          fontSize={fontSizes}
          onChange={(e) => handleChanges(e)}
          type="text"
          id="blue_token_prefix"
          size="small"
          variant="outlined"
        />
      </Box>
      <Box width={boxItemWidth} sx={boxStyles}>
        <Typography
          fontSize={fontSizes}
          variant="h6"
          display="block"
          gutterBottom
        >
          Blue token per row
        </Typography>
        <TextField
          sx={{ ...textFieldWidth }}
          fontSize={fontSizes}
          onChange={(e) => handleChanges(e)}
          id="blue_tokens_per_row"
          type="number"
          size="small"
          variant="outlined"
        />
      </Box>

      <Box width={boxItemWidth} sx={boxStyles}>
        <Typography
          fontSize={fontSizes}
          variant="h6"
          display="block"
          gutterBottom
        >
          Number of red tokens
        </Typography>
        <TextField
          sx={{ ...textFieldWidth }}
          fontSize={fontSizes}
          onChange={(e) => handleChanges(e)}
          size="small"
          id="no_of_red_tokens"
          type="number"
          variant="outlined"
        />
      </Box>
      <Box width={boxItemWidth} sx={boxStyles}>
        <Typography
          fontSize={fontSizes}
          variant="h6"
          display="block"
          gutterBottom
        >
          Red token prefix
        </Typography>
        <TextField
          sx={{ ...textFieldWidth }}
          fontSize={fontSizes}
          onChange={(e) => handleChanges(e)}
          type="text"
          id="red_token_prefix"
          size="small"
          variant="outlined"
        />
      </Box>
      <Box width={boxItemWidth} sx={boxStyles}>
        <Typography fontSize={fontSizes} variant="h6">
          Red token per row
        </Typography>
        <TextField
          sx={{ ...textFieldWidth }}
          fontSize={fontSizes}
          onChange={(e) => handleChanges(e)}
          id="red_tokens_per_row"
          type="number"
          size="small"
          variant="outlined"
        />
      </Box>
      <Box
        width={boxItemWidth}
        sx={{
          ...boxStyles,
          justifyContent: "flex-end",
        }}
      >
        <Button
          fontSize={fontSizes}
          sx={{ mr: "3rem", ...noTextTrnsform }}
          variant="contained"
          color="success"
          onClick={() => generate()}
        >
          Generate
        </Button>
        <Button
          fontSize={fontSizes}
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
