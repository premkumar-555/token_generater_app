import React, { useRef, useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { getContextValues } from "../contexts/FormContext";
import { v4 as uuid } from "uuid";

export default function FlexBox() {
  const { tokenData, settokenData } = getContextValues();
  const { blue, red } = tokenData;
  const tokenCount = useRef({ blue: 0, red: 0 });
  let count = { blue: blue?.tokens, red: red?.tokens };

  return (
    <Box
      sx={{
        width: "40%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "scroll",
        padding: "0.5rem",
        borderRadius: "6px",
        backgroundColor: "whitesmoke",
      }}
    >
      {blue &&
        Array.from(Array(blue.rows)).map((_, index) => {
          return (
            <Box
              key={uuid()}
              sx={{
                mb: "10px",
                display: "flex",
                gap: "10px",
                width: "100%",
              }}
            >
              {Array.from(Array(blue?.columns)).map((_, index) => {
                if (count?.blue > 0) {
                  count = { ...count, blue: count.blue - 1 };
                  console.log(count.blue);
                  return (
                    <Box
                      sx={{
                        backgroundColor: `${blue?.color}`,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "50px",
                        height: "50px",
                        borderRadius: "6px",
                      }}
                      key={uuid()}
                    >
                      {`${blue?.prefix}${blue.tokens - count.blue}`}
                    </Box>
                  );
                }
              })}
            </Box>
          );
        })}

      {red &&
        Array.from(Array(red.rows)).map((_, index) => {
          return (
            <Box
              key={uuid()}
              sx={{
                mb: "10px",
                display: "flex",
                gap: "10px",
                width: "100%",
              }}
            >
              {Array.from(Array(red?.columns)).map((_, index) => {
                if (count?.red > 0) {
                  count = { ...count, red: count.red - 1 };
                  console.log(count.red);
                  return (
                    <Box
                      key={uuid()}
                      sx={{
                        backgroundColor: `${red?.color}`,
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        width: "50px",
                        height: "50px",
                        alignItems: "center",
                        borderRadius: "6px",
                      }}
                    >
                      {`${red?.prefix}${red.tokens - count.red}`}
                    </Box>
                  );
                }
              })}
            </Box>
          );
        })}
    </Box>
  );
}
