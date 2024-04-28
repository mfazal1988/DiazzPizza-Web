import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import {
  INVALID_EMAIL_MSG,
  MAX_TEXTAREA_LENGTH,
  MAX_TEXTAREA_LENGTH_MSG,
  REQUIRED_MSG,
  TRAILING_SPACES_MSG,
} from "../../constants";
import FormContainer from "./../FormContainer/form-container";
import FieldContainer from "./../FieldContainer/field-container";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Header from "./header";
import Footer from "./footer";
import {
  getOrderList,
  UpdateOrderStatus,
  UpdateOrderDeliveryPerson
} from "./../../store/order/orderAction";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import { crustType, variantType } from "../../enums/common";

const OrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [orderData, setOrderData] = useState();
  const [selectedOrder, setSelectedOrder] = useState();
  const [deliverPerson, setDeliverPerson] = useState({});

  const { authResponse, authResponseLoading, authResponseError } = useSelector(
    (state) => state.auth
  );
  const { orderListResponse, orderStatusResponse } = useSelector(
    (state) => state.order
  );

  const [paginationModel, setPaginationModel] = useState({
    name: "",
    pageSize: 5,
    page: 1,
  });

  const handlePaginate = (event, value) => {
    setPaginationModel({ ...paginationModel, page: value });
  };

  const handleOrderView = (value) => {
    setSelectedOrder(value);
  };

  const columns = [
    {
      field: "orderNumber",
      headerName: "Order",
      width: 100,
      renderCell: (params) => {
        return `${params.row.orderNumber}`;
      },
    },
    {
      field: "orderRecipient.name",
      headerName: "Customer",
      width: 150,
      renderCell: (params) => {
        return params.row.orderRecipient.name;
        // return <ul style={{ listStyle: "none"}}>
        //   <li>{customer.name} - {customer.contactNumber}</li>
        //   <li>{customer.address}</li>
        //   <li>{customer.city}</li>
        //   <li>{customer.email}</li>

        // </ul>;
      },
    },
    {
      field: "orderRecipient.contactNumber",
      headerName: "Contact",
      width: 150,
      renderCell: (params) => {
        return params.row.orderRecipient.contactNumber;
      },
    },
    {
      field: "orderRecipient.address",
      headerName: "Address",
      width: 150,
      renderCell: (params) => {
        return params.row.orderRecipient.address;
      },
    },
    {
      field: "additionalInstruction",
      headerName: "Instructions",
      type: "number",
      width: 110,
      renderCell: (params) => {
        if (
          !params.row.additionalInstruction ||
          params.row.additionalInstruction === "string"
        ) {
          return "N/A";
        }
        return params.row.additionalInstruction;
      },
    },
    // {
    //   field: "orderStatusId",
    //   headerName: "Order Status",
    //   renderCell: (params) => {
    //     if (params.row.orderStatusId === 1) {
    //       // return <Chip color="primary" size="small" label="Order Received" />;
    //       return "Order Received";
    //     } else if (params.row.orderStatusId === 2) {
    //       return "Order Processing";
    //     } else if (params.row.orderStatusId === 3) {
    //       return "Ready To Delivery";
    //     } else if (params.row.orderStatusId === 4) {
    //       return "Delivered";
    //     } else if (params.row.orderStatusId === 5) {
    //       return "Cancelled";
    //     }
    //   },
    //   width: 180,
    // },
    {
      field: "orderDetails",
      headerName: "Items",
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleOrderView(params.row.orderDetails)}
          >
            View
          </Button>
        );
      },
      width: 100,
    },
    {
      field: "updatestatus",
      headerName: "Update Status",
      type: "string",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Select
              labelId="crust-type"
              id="crust-type-select"
              sx={{
                color: "#fff",
                border: "1px solid #fff",
                width: "220px",
                "& .MuiSvgIcon-root": { color: "#fff" },
              }}
              value={params.row.orderStatusId}
              label="Crust Type"
              onChange={(e) => {
                dispatch(
                  UpdateOrderStatus({
                    id: params.row.id,
                    orderStatusId: e.target.value,
                  })
                );
              }}
            >
              <MenuItem value={1}> {"Order Received"} </MenuItem>
              <MenuItem value={2}> {"Order Processing"} </MenuItem>
              <MenuItem value={3}> {"Ready To Delivery"} </MenuItem>
              <MenuItem value={4}> {"Delivered"} </MenuItem>
              <MenuItem value={5}> {"Cancelled"} </MenuItem>
            </Select>
          </>
        );
      },
    },
    {
      field: "Save",
      headerName: "Update delivery",
      type: "string",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Box display={"flex"}>
              <TextField
                name="name"
                type="text"
                size="small"
                data-testid={"name"}
                placeholder={params.row.deliveryPerson}
                fullWidth
                //value={params.row.deliveryPerson}
                onChange={(e) => {
                  setDeliverPerson({
                    id: params.row.id,
                    deliveryPerson: e.target.value,
                  })
                }}
              />
              <Button variant="contained" color="warning" onClick={()=>{
                dispatch(UpdateOrderDeliveryPerson(deliverPerson));
                setDeliverPerson({});
              }}>
                Save
              </Button>
            </Box>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    if (!authResponse) {
      alert("Please login to check order details");
      navigate("/signin");
      return;
    }

    dispatch(
      getOrderList({
        page: 1,
        pagesize: paginationModel.pageSize,
      })
    );
  }, []);

  useEffect(() => {
    orderStatusResponse && alert("Order Status Updated Successfully!");
    orderStatusResponse &&
      dispatch(
        getOrderList({
          page: 1,
          pagesize: paginationModel.pageSize,
        })
      );
  }, [orderStatusResponse]);

  useEffect(() => {
    orderListResponse &&
      orderListResponse.data &&
      setOrderData(orderListResponse.data);
  }, [orderListResponse]);

  useEffect(() => {
    dispatch(
      getOrderList({
        page: paginationModel.page,
        pagesize: paginationModel.pageSize,
      })
    );
  }, [paginationModel]);

  return (
    <>
      <Header />

      <Box sx={{ marginLeft: "45px", width: "1300px" }}>
        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
          Order Details
        </Typography>
        <Grid container sx={{ mb: 2 }}>
          <Grid item display={"flex"}>
            <div className="col-md-10">
              {/* {JSON.stringify(orderListResponse)} */}

              {orderData && (
                <>
                  <DataGrid
                    sx={{
                      color: "#fff",
                      "& .MuiDataGrid-footerContainer": {
                        display: "none",
                      },
                    }}
                    rowHeight={80}
                    rows={orderData}
                    columns={columns}
                    hideFooterPagination={true}
                  />
                </>
              )}
            </div>
            <div className="col-md-2">
              {
                <Typography variant="h5" color={"#9c27b0"}>
                  Selected Order
                </Typography>
              }
              {selectedOrder &&
                selectedOrder.map((p) => {
                  const crust =
                    p.product && p.product.productDetails
                      ? crustType.find(
                          (x) =>
                            x.id === p.product.productDetails[0].crustTypeId
                        )
                      : "";
                  const variant =
                    p.product && p.product.productDetails
                      ? variantType.find(
                          (x) =>
                            x.id ===
                            p.product.productDetails[0].productVarientId
                        )
                      : "";
                  return (
                    <Grid container sx={{ borderBottom: "2px grey solid" }}>
                      <Box display={"flex"}>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ width: "250px" }}
                          >{`${p.product.name}`}</Typography>
                          <Typography sx={{ fontSize: "14px" }}>{`${
                            crust ? crust.type : ""
                          }-${variant ? variant.type : ""}`}</Typography>
                        </Box>
                        <Typography variant="h6">{p.quantity}</Typography>
                      </Box>
                    </Grid>
                  );
                })}
            </div>
          </Grid>
          <Grid item></Grid>
        </Grid>
        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{ height: "100px", alignItems: "center" }}
        >
          <Pagination
            sx={{
              justifyContent: "center",
              "& .MuiPaginationItem-root": {
                backgroundColor: "#fff",
              },
              "& .Mui-selected": {
                backgroundColor: "#ffa500 !important",
              },
              "& .Mui-selected:hover": {
                backgroundColor: "#aaa",
              },
            }}
            hidePrevButton={
              orderListResponse && orderListResponse?.hasPreviousPage
            }
            hideNextButton={orderListResponse && orderListResponse?.hasNextPage}
            count={orderListResponse && orderListResponse?.totalPages}
            page={paginationModel.page}
            onChange={handlePaginate}
          />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default OrderDetails;
