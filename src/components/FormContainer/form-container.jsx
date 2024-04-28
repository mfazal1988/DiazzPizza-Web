import { Box, BoxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

// type FormContainerProps = BoxProps & {
//   formTitle: string;
//   children: ReactNode;
// };

const FormContainer = (props ) => {
  return (
    <Box flexDirection="row" sx={{gap: 1, border: "1px solid #aaa", padding: 3, borderRadius: 3, marginBottom: "10px", ...props.sx }}>
      {props.formTitle !=="" && <Box sx={{ width: "100%", marginBottom: 1 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: "400" }}>
          {props.formTitle}
        </Typography>
      </Box>}
      <Box sx={{ flexGrow: 2 }}>{props.children}</Box>
    </Box>
  );
};

export default FormContainer;
