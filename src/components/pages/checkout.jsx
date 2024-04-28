import { useEffect, useState } from "react";
import Header from "./header";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  RadioGroup,
  Radio,
} from "@mui/material";
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeToken,
} from "../../helpers/manageLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { crustType, variantType } from "../../enums/common";
import FieldContainer from "../FieldContainer/field-container";
import { SaveOrder } from "../../store/order/orderAction";
import { useNavigate } from "react-router-dom";
import {
  INVALID_EMAIL_MSG,
  MAX_TEXTAREA_LENGTH,
  MAX_TEXTAREA_LENGTH_MSG,
  REQUIRED_MSG,
  TRAILING_SPACES_MSG,
} from "../../constants";

import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";

const orderSchema = Yup.object().shape({
  cusName: Yup.string().required(REQUIRED_MSG).trim(TRAILING_SPACES_MSG),
  cusAddress: Yup.string().required(REQUIRED_MSG),
  cusCity: Yup.string().required(REQUIRED_MSG),
  cusEmail: Yup.string().required(REQUIRED_MSG).email(INVALID_EMAIL_MSG),
  cusNum: Yup.string().required(REQUIRED_MSG),
  additionalInstruction: Yup.string(),
  additionalNotes: Yup.string(),
  cardname: Yup.string(),
  cardno: Yup.string(),
  expireon: Yup.string(),
  cvv: Yup.string()
});

const Checkout = () => {
  const [total, setTotal] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const [basketData, setBasketData] = useState();
  const [productList, setProductList] = useState([]);
  const productState = useSelector((state) => state.product);
  const orderState = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrderPlacing = (value) => {
    debugger;
    const date = new Date();
    const orderDetailsData = basketData.map((i) => {
      return {
        id: 0,
        isDeleted: false,
        createdBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createdDate: date, //"2024-04-20T17:55:32.648Z",
        lastModifiedBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        lastModifiedDate: date, //"2024-04-20T17:55:32.648Z",
        orderID: 0,
        productDetailID: i.productDetailId,
        quantity: i.qty,
        price: parseFloat(i.price) * parseFloat(i.qty),
        couponDiscount: 0,
        creditCardDiscount: 0,
        otherDiscount: 0,
        netTotal: 0,
      };
    });
    dispatch(
      SaveOrder({
        userId: 1,
        orderNumber: "ORD011",
        orderTypeId: 1,
        orderStatusId: 1,
        additionalInstruction: value.additionalInstruction,
        additionalNotes: value.additionalNotes,
        deliveryPerson: "No Person",
        locationLink: "string",
        isOrderForSelf: true,
        branchId: 1,
        orderRecipient: {
          id: 0,
          isDeleted: false,
          createdBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          createdDate: date, //"2024-04-20T17:55:32.648Z",
          lastModifiedBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          lastModifiedDate: date, //"2024-04-20T17:55:32.648Z",
          orderId: 0,
          name: value.cusName,
          address: value.cusAddress,
          city: value.cusCity,
          email: value.cusEmail,
          contactNumber: value.cusNum,
        },
        orderDetails: orderDetailsData,
      })
    );
  };

  useEffect(() => {
    const currentCart = getTokenFromLocalStorage("dp-cart");

    if (productList.length < 1) {
      return;
    }
    const prepareBasketData =
      currentCart &&
      currentCart.map((i) => {
        const selectedProduct = productList.find((x) => x.id === i.product);
        return {
          id: i.product,
          product: selectedProduct.name,
          description: selectedProduct.description,
          selectedCrust: crustType.find((x) => x.id === i.crust).type,
          seletcedVariant: variantType.find((x) => x.id === i.variant).type,
          productDetailId: i.productDetailId,
          qty: i.qty,
          price: selectedProduct.productDetails[0].productPrice.price,
          subtotal:
            parseFloat(i.qty) *
            parseFloat(selectedProduct.productDetails[0].productPrice.price),
        };
      });
    setBasketData(prepareBasketData);
  }, [productList]);

  useEffect(() => {
    productState &&
      productState.menuListResponse &&
      productState.menuListResponse.data &&
      setProductList(productState.menuListResponse.data);
  }, [productState]);

  useEffect(() => {
    if (orderState.orderResponse && orderState.orderResponse.success) {
      alert("Order placed successfully!");
      removeToken("dp-cart");
      navigate("/");
    }
  }, [orderState]);

  return (
    <>
      <Header />

      <Box sx={{ marginLeft: "100px", width: "100%" }}>
        <Typography variant="h4" className="mb-3 mt-5 bread">
          Checkout
        </Typography>
        <Formik
          enableReinitialize
          initialValues={{ cusName: "", cusAddress: "" }}
          validationSchema={orderSchema}
          onSubmit={handleOrderPlacing}
        >
          {(props) => (
            <Form>
              <Box display={"flex"}>
                <Box sx={{ width: "50%" }}>
                  <Box sx={{ width: "80%" }}>
                    <Box className="row">
                      <Typography variant="h5" className="mb-3 mt-5 bread">
                        Customer Details
                      </Typography>
                    </Box>
                    <FieldContainer className={"form-control"} label="Your Name*" sx={{ marginBottom: 3 }}>
                      <TextField
                        name="cusName"
                        type="text"
                        size="small"
                        data-testid={"cusName"}
                        placeholder={"Your Name"}
                        fullWidth
                        value={props.values.cusName}
                        error={
                          props.errors.cusName === undefined ? false : true
                        }
                        helperText={props.errors.cusName}
                        onChange={(e) => {
                          props.setFieldValue(e.target.name, e.target.value);
                        }}
                      />
                    </FieldContainer>
                    <FieldContainer
                      label="Deliver Address*"
                      sx={{ marginBottom: 3 }}
                    >
                      <TextField
                        name="cusAddress"
                        type="text"
                        size="small"
                        data-testid={"cusAddress"}
                        placeholder={"Delivery Address"}
                        fullWidth
                        value={props.values.cusAddress}
                        error={
                          props.errors.cusAddress === undefined ? false : true
                        }
                        helperText={props.errors.cusAddress}
                        onChange={(e) => {
                          props.setFieldValue(e.target.name, e.target.value);
                        }}
                      />
                    </FieldContainer>
                    <FieldContainer label="City*" sx={{ marginBottom: 3 }}>
                      <TextField
                        name="cusCity"
                        type="text"
                        size="small"
                        data-testid={"cusCity"}
                        placeholder={"City"}
                        fullWidth
                        value={props.values.cusCity}
                        error={
                          props.errors.cusCity === undefined ? false : true
                        }
                        helperText={props.errors.cusCity}
                        onChange={(e) => {
                          props.setFieldValue(e.target.name, e.target.value);
                        }}
                      />
                    </FieldContainer>
                    <FieldContainer
                      label="Email Address*"
                      sx={{ marginBottom: 3 }}
                    >
                      <TextField
                        name="cusEmail"
                        type="text"
                        size="small"
                        data-testid={"cusEmail"}
                        placeholder={"Email Address"}
                        fullWidth
                        value={props.values.cusEmail}
                        error={
                          props.errors.cusEmail === undefined ? false : true
                        }
                        helperText={props.errors.cusEmail}
                        onChange={(e) => {
                          props.setFieldValue(e.target.name, e.target.value);
                        }}
                      />
                    </FieldContainer>
                    <FieldContainer
                      label="Contact No*"
                      sx={{ marginBottom: 3 }}
                    >
                      <TextField
                        name="cusNum"
                        type="text"
                        size="small"
                        data-testid={"cusNum"}
                        placeholder={"Contact No"}
                        fullWidth
                        value={props.values.cusNum}
                        error={props.errors.cusNum === undefined ? false : true}
                        helperText={props.errors.cusNum}
                        onChange={(e) => {
                          props.setFieldValue(e.target.name, e.target.value);
                        }}
                      />
                    </FieldContainer>
                    <FieldContainer
                      label="Additional Instruction"
                      sx={{ marginBottom: 3 }}
                    >
                      <TextField
                        name="additionalInstruction"
                        type="text"
                        size="small"
                        multiline={true}
                        rows={3}
                        data-testid={"additionalInstruction"}
                        placeholder={"Additional Instruction"}
                        fullWidth
                        value={props.values.additionalInstruction}
                        error={
                          props.errors.additionalInstruction === undefined
                            ? false
                            : true
                        }
                        helperText={props.errors.additionalInstruction}
                        onChange={(e) => {
                          props.setFieldValue(e.target.name, e.target.value);
                        }}
                      />
                    </FieldContainer>
                    <FieldContainer
                      label="Special Notes"
                      sx={{ marginBottom: 3 }}
                    >
                      <TextField
                        name="additionalNotes"
                        type="text"
                        size="small"
                        multiline={true}
                        rows={3}
                        data-testid={"additionalNotes"}
                        placeholder={"Special Notes"}
                        fullWidth
                        value={props.values.additionalNotes}
                        error={
                          props.errors.additionalNotes === undefined
                            ? false
                            : true
                        }
                        helperText={props.errors.additionalNotes}
                        onChange={(e) => {
                          props.setFieldValue(e.target.name, e.target.value);
                        }}
                      />
                    </FieldContainer>
                  </Box>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Box className="row">
                    {/* {JSON.stringify(productList)} */}
                    {/* {JSON.stringify(basketData)} */}
                    <Typography variant="h5" className="mb-3 mt-5 bread">
                      Order Summary
                    </Typography>
                    {basketData &&
                      basketData.map((p) => {
                        return (
                          <Grid container>
                            <Box display={"flex"}>
                              <Typography
                                variant="h6"
                                sx={{ width: "400px" }}
                              >{`${p.product} (${p.selectedCrust}, ${p.seletcedVariant})`}</Typography>
                              <Typography variant="h6">{p.qty}</Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    <Box sx={{ width: "100%", pl: 2 }}>
                      <Box className="row">
                        <Typography variant="h5" className="mb-3 mt-5 bread">
                          Payment Method
                        </Typography>
                      </Box>
                      <Box className="row">
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={paymentMethod}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          sx={{ display:"flex", flexDirection: "row"}}
                        >
                          <FormControlLabel
                            value="cod"
                            control={<Radio />}
                            label="Cash on Delivery"
                          />
                          <FormControlLabel
                            value="credit"
                            control={<Radio />}
                            label="Credit/debit card"
                          />
                        </RadioGroup>
                      </Box>
                      {paymentMethod === "credit" && (
                        <>
                          <Box className="row">
                            <FieldContainer
                              label="Name on the card"
                              sx={{ marginBottom: 3 }}
                            >
                              <TextField
                                name="cardname"
                                type="text"
                                size="small"
                                data-testid={"cardname"}
                                placeholder={"Eg: John Doe"}
                                fullWidth
                                value={props.values.cardname}
                                error={
                                  props.errors.cardname === undefined
                                    ? false
                                    : true
                                }
                                helperText={props.errors.cardname}
                                onChange={(e) => {
                                  props.setFieldValue(
                                    e.target.name,
                                    e.target.value
                                  );
                                }}
                              />
                            </FieldContainer>
                          </Box>
                          <Box className="row">
                            <FieldContainer
                              label="Card no"
                              sx={{ marginBottom: 3 }}
                            >
                              <TextField
                                name="cardno"
                                type="text"
                                size="small"
                                data-testid={"cardno"}
                                placeholder={"0000-0000-0000-0000"}
                                fullWidth
                                value={props.values.cardno}
                                error={
                                  props.errors.cardno === undefined
                                    ? false
                                    : true
                                }
                                helperText={props.errors.cardno}
                                onChange={(e) => {
                                  props.setFieldValue(
                                    e.target.name,
                                    e.target.value
                                  );
                                }}
                              />
                            </FieldContainer>
                          </Box>
                          <Box className="row">
                            <FieldContainer
                              label="Expire on"
                              sx={{
                                marginBottom: 3,
                                marginRight: 1,
                                width: "150px",
                              }}
                            >
                              <TextField
                                name="expireon"
                                type="text"
                                size="small"
                                data-testid={"expireon"}
                                placeholder={"MM/YY"}
                                fullWidth
                                value={props.values.expireon}
                                error={
                                  props.errors.expireon === undefined
                                    ? false
                                    : true
                                }
                                helperText={props.errors.expireon}
                                onChange={(e) => {
                                  props.setFieldValue(
                                    e.target.name,
                                    e.target.value
                                  );
                                }}
                              />
                            </FieldContainer>
                            <FieldContainer
                              label="CVV"
                              sx={{ marginBottom: 3, width: "100px" }}
                            >
                              <TextField
                                name="cvv"
                                type="text"
                                size="small"
                                data-testid={"cvv"}
                                placeholder={"CVV"}
                                fullWidth
                                value={props.values.cvv}
                                error={
                                  props.errors.cvv === undefined
                                    ? false
                                    : true
                                }
                                helperText={props.errors.cvv}
                                onChange={(e) => {
                                  props.setFieldValue(
                                    e.target.name,
                                    e.target.value
                                  );
                                }}
                              />
                            </FieldContainer>
                          </Box>
                        </>
                      )}

                      <Box
                        className="row"
                        sx={{ justifyContent: "flex-start", pt: 3 }}
                      >
                        <Button
                          variant="contained"
                          color="warning"
                          type="submit"
                        >
                          Place Order
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Checkout;
