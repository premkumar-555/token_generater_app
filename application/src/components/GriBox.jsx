import React, { useRef, useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { getContextValues } from "../contexts/FormContext";
import { v4 as uuid } from "uuid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const { tokenData, settokenData } = getContextValues();
  const { blue, red } = tokenData;
  const tokenCount = useRef({ blue: 0, red: 0 });
  let count = { blue: blue?.tokens, red: red?.tokens };

  useEffect(() => {
    if (blue && red) {
      count = { blue: blue.tokens, red: red.tokens };
      console.log(tokenCount);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {blue &&
        Array.from(Array(blue.rows)).map((_, index) => {
          return (
            <Grid
              key={uuid()}
              sx={{ mb: "10px" }}
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 4, md: 4 }}
            >
              {Array.from(Array(blue?.columns)).map((_, index) => {
                if (count?.blue > 0) {
                  count = { ...count, blue: count.blue - 1 };
                  console.log(count.blue);
                  return (
                    <Grid key={uuid()} item xs={2} sm={2} md={5}>
                      <Item
                        sx={{
                          backgroundColor: `${blue?.color}`,
                          color: "white",
                        }}
                      >
                        {`${blue?.prefix}${blue.tokens - count.blue}`}
                      </Item>
                    </Grid>
                  );
                }
              })}
            </Grid>
          );
        })}

      {blue &&
        Array.from(Array(blue.rows)).map((_, index) => {
          return (
            <Grid
              key={uuid()}
              sx={{ mb: "10px" }}
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 4, md: 4 }}
            >
              {Array.from(Array(red?.columns)).map((_, index) => {
                if (count?.red > 0) {
                  count = { ...count, red: count.red - 1 };
                  console.log(count.red);
                  return (
                    <Grid key={uuid()} item xs={2} sm={2} md={5}>
                      <Item
                        sx={{
                          backgroundColor: `${red?.color}`,
                          color: "white",
                        }}
                      >
                        {`${red?.prefix}${red.tokens - count.red}`}
                      </Item>
                    </Grid>
                  );
                }
              })}
            </Grid>
          );
        })}
    </Box>
  );
}
