import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

// type FieldContainerProps = BoxProps & {
//   label: string;
//   children: ReactNode;
// };

const FieldContainer = (props) => {
  return (
    <Box flexDirection="row" sx={{ marginBottom: 1, marginTop: 1, ...props.sx }}>
      <Box>
        <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
          {props.label}
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 2 }}>{props.children}</Box>
    </Box>
  );
};

export default FieldContainer;
