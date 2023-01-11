import React, { useRef, useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { getContextValues } from "../contexts/FormContext";
import { v4 as uuid } from "uuid";

const containerWidth = { xs: "85%", sm: "60%", md: "50%", lg: "45%" };
const containerStyle = {
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  // justifyContent: "flex-start",
  overflow: "scroll",
  padding: "0.5rem",
  // paddingLeft: "4rem",
  borderRadius: "6px",
};

const flexItemStyle = {
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
};
const flexItemWidthHeight = { xs: "30px", sm: "40px", md: "45px", lg: "50px" };

const flexBoxStyle = {
  width: "100%",
  mb: "10px",
  display: "flex",
  justifyContent: "flex-start",
  gap: "10px",
  ml: "5px",
};
const fontSizes = { xs: "12px", sm: "18px", md: "20px" };

export default function FlexBox() {
  const { tokenData, settokenData } = getContextValues();
  const { blue, red } = tokenData;
  const tokenCount = useRef({ blue: 0, red: 0 });
  let count = { blue: blue?.tokens, red: red?.tokens };

  return (
    <>
      {blue && red && (
        <Box sx={containerStyle} width={containerWidth}>
          {blue &&
            Array.from(Array(blue.rows)).map((_, index) => {
              return (
                <Box key={uuid()} sx={flexBoxStyle}>
                  {Array.from(Array(blue?.columns)).map((_, index) => {
                    if (count?.blue > 0) {
                      count = { ...count, blue: count.blue - 1 };
                      return (
                        <Box
                          width={flexItemWidthHeight}
                          height={flexItemWidthHeight}
                          fontSize={fontSizes}
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
                      return (
                        <Box
                          width={flexItemWidthHeight}
                          height={flexItemWidthHeight}
                          fontSize={fontSizes}
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
