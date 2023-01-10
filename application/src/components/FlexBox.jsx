import React, { useRef, useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { getContextValues } from "../contexts/FormContext";
import { v4 as uuid } from "uuid";

const containerStyle = {
  width: "40%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "scroll",
  padding: "0.5rem",
  borderRadius: "6px",
};

const flexItemStyle = {
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "60px",
  height: "60px",
  borderRadius: "6px",
};

const flexBoxStyle = {
  mb: "10px",
  display: "flex",
  gap: "10px",
  width: "100%",
};

export default function FlexBox() {
  const { tokenData, settokenData } = getContextValues();
  const { blue, red } = tokenData;
  const tokenCount = useRef({ blue: 0, red: 0 });
  let count = { blue: blue?.tokens, red: red?.tokens };

  return (
    <>
      {blue && red && (
        <Box sx={containerStyle}>
          {blue &&
            Array.from(Array(blue.rows)).map((_, index) => {
              return (
                <Box key={uuid()} sx={flexBoxStyle}>
                  {Array.from(Array(blue?.columns)).map((_, index) => {
                    if (count?.blue > 0) {
                      count = { ...count, blue: count.blue - 1 };
                      console.log(count.blue);
                      return (
                        <Box
                          sx={{
                            backgroundColor: `${blue?.color}`,
                            ...flexItemStyle,
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
                <Box key={uuid()} sx={flexBoxStyle}>
                  {Array.from(Array(red?.columns)).map((_, index) => {
                    if (count?.red > 0) {
                      count = { ...count, red: count.red - 1 };
                      console.log(count.red);
                      return (
                        <Box
                          key={uuid()}
                          sx={{
                            backgroundColor: `${red?.color}`,
                            ...flexItemStyle,
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
      )}
    </>
  );
}
