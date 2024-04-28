import React from "react";
import { Box, Divider, Grid, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductList } from "../store/product/productAction";

// interface LayoutProps {
//   children?: React.ReactNode;
// }

export default function Layout(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProductList({
        name: "",
        page: 1,
        pagesize: 6,
      })
    );
  }, []);
  return (
    <>
      <Grid container>
      {props?.children}
      </Grid>
    </>
  );
}
