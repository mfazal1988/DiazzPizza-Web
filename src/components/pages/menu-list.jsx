import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Checkbox,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  INVALID_EMAIL_MSG,
  MAX_TEXTAREA_LENGTH,
  MAX_TEXTAREA_LENGTH_MSG,
  REQUIRED_MSG,
  TRAILING_SPACES_MSG,
} from "../../constants";
import Header from "./header";
import Footer from "./footer";
import FormContainer from "../FormContainer/form-container";
import FieldContainer from "../FieldContainer/field-container";
import { getProductList } from "../../store/product/productAction";
import Pagination from "@mui/material/Pagination";
import { crustType, variantType } from "../../enums/common";
import { setTokenToLocalStorage, getTokenFromLocalStorage, removeToken } from "./../../helpers/manageLocalStorage";

import useFindProductDetails from "../../hooks/useFindProductDetails";

import * as Yup from "yup";
import { Form, Formik } from "formik";

const loginSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED_MSG).trim(TRAILING_SPACES_MSG),
  description: Yup.string().required(REQUIRED_MSG),
});

const MenuList = () => {
  const [productList, setProductList] = useState([]);
  
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  
  const {findProductDetail } = useFindProductDetails(productList);


  const [paginationModel, setPaginationModel] = useState({
    name: "",
    pageSize: 6,
    page: 1,
  });

  const handlePaginate = (event, value) => {
    setPaginationModel({ ...paginationModel, page: value });
  };

  const handleCartUpdate = (e, p) =>{

    const currentCart = getTokenFromLocalStorage("dp-cart");

    //remove existing element
    const refreshedCartData = currentCart && currentCart.filter((c)=>{
      if(c.product !== p.id) {
        return c;
      }
    });

    const cartObject = {
      product: p.id,
      crust: p.selectedCrust,
      variant: p.selectedVariant,
      productDetailId: p.productDetailId,
      qty: 1
    }

    //preparing new object for cart
    const newCartData = refreshedCartData ? [...refreshedCartData, cartObject] : [cartObject];
    setTokenToLocalStorage("dp-cart",newCartData);

    alert("Added to the basket!");
  }

  useEffect(() => {
    dispatch(
      getProductList({
        name: paginationModel.name,
        page: paginationModel.page,
        pagesize: paginationModel.pageSize,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      getProductList({
        name: paginationModel.name,
        page: paginationModel.page,
        pagesize: paginationModel.pageSize,
      })
    );
  }, [paginationModel]);

  useEffect(()=>{
    productState &&
    productState.menuListResponse &&
    productState.menuListResponse.data &&  setProductList(productState.menuListResponse.data);
  },[productState])

  return (
    <>
      <Header />

      <Box sx={{ marginLeft: "45px", width: "100%" }}>
        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
          Menu
        </Typography>
        {/* {productState && JSON.stringify(productState.menuListResponse)} */}
        <Box>
          <Box className="row">
            {/* {JSON.stringify(productList[0])} */}
            <div class="container-wrap" style={{ width: "100%" }}>
              <div class="row no-gutters d-flex">
                {productList && productList.length > 0 && productList.map((p) => {
                    return ( 
                      <div className="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated" style={{padding:"5px"}}>
                        
                        <div class="services-wrap d-flex">
                          <a href="#" class="img" style={{
                              backgroundImage: `url(${
                                p.imagePath && p.imagePath.length > 3
                                  ? p.imagePath
                                  : "../images/Chilli_Chicken_Pizza.jpg"
                              })`,
                            }}></a>
                          <div class="text p-4">
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>
                            {/* <p>{JSON.stringify(p.productDetails[0].crustType)}</p>
                            <p>{JSON.stringify(p.productDetails[0].productVariant)}</p> */}
                            <div class="form-group">                              
                              <FieldContainer label="Crust Type" sx={{ marginBottom: 3 }}>
                              <Select
                                labelId="crust-type"
                                id="crust-type-select"
                                sx={{ color: "#fff", border: "1px solid #fff", width: "120px", "& .MuiSvgIcon-root": { color: "#fff"}}}
                                //value={1}
                                label="Crust Type"
                                onChange={(e) =>{
                                  const newList = productList.map((i)=>{
                                    const found = findProductDetail(i, e.target.value, i.selectedVariant);
                                    return i.id === p.id ? {
                                      ...i,
                                      selectedCrust : e.target.value,
                                      productDetailId: found.id
                                    }: {
                                      ...i
                                    }
                                  });
                                  
                                  setProductList(newList);
                                }}
                              > 
                                {crustType.map((i, index) =>{
                                return <MenuItem value={i.id} selected={i.id === 1}>{i.type}</MenuItem>
                              })}
                              </Select>
                              </FieldContainer>
                              
                            </div>
                            <div class="form-group">
                              {/* <label for="variant">Variant</label>
                              <select class="form-control" id="variant">
                                <option value="regular">Regular</option>
                                <option value="large">Large</option>
                                <option value="extra-large">Extra Large</option>
                              </select> */}
                              <FieldContainer label="Variant" sx={{ marginBottom: 3 }}>
                              <Select
                                labelId="variant-type"
                                id="variant-type-select"
                                sx={{ color: "#fff", border: "1px solid #fff", width: "120px", "& .MuiSvgIcon-root": { color: "#fff"}}}
                                //value={1}
                                label="Variant"
                                onChange={(e) =>{
                                  const newList = productList.map((i)=>{
                                    const found = findProductDetail(i, i.selectedCrust, e.target.value);
                                    const selectedVariant = i.selectedCrust && e.target.value && p.productDetails.find(x=>x.crustTypeId === i.selectedCrust && x.productVarientId===e.target.value);
                                    return i.id === p.id ? {
                                      ...i,
                                      selectedVariant : e.target.value,
                                      productDetailId: found && found.id,
                                      selectedPrice: selectedVariant && selectedVariant.productPrice.price
                                    }: {
                                      ...i
                                    }
                                  });

                                  setProductList(newList);
                                }}
                              > 
                                {variantType.map((i, index) =>{
                                //  const detail = p.productDetails.find(x => x.productVarientId === i.id);
                                return <MenuItem value={i.id} selected={i.id === 1}>{i.type}</MenuItem>
                              })}
                              </Select>
                              </FieldContainer>
                            </div>
                            <p class="price">
                              <span>
                                Rs. {p.selectedPrice ? p.selectedPrice : p.productDetails && p.productDetails[0].productPrice.price}
                              </span>{" "}
                              
                            </p>
                            
                            <Button variant="contained" onClick={(e) => {
                              if(!p.selectedPrice || !p.selectedPrice > 0){
                                alert("Sorry! This variant is not available at the moment.");
                              }else{
                                handleCartUpdate(e,p)
                              }
                              
                              }}>Add to Cart</Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                {/* <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
                  <div class="services-wrap d-flex">
                    <a
                      href="#"
                      class="img"
                      style={{
                        backgroundImage:
                          "url(../images/Chilli_Chicken_Pizza.jpg)",
                      }}
                    ></a>
                    <div class="text p-4">
                      <h3>Chilli Chicken Pizza</h3>
                      <p>
                        A pizza topped with spicy chicken, Green Chillies,
                        onions &amp; Mozzarella.
                      </p>
                      <p class="price">
                        <span>Rs. 840</span>{" "}
                        <a
                          href="#"
                          class="ml-2 btn btn-white btn-outline-white"
                        >
                          Order
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
                  <div class="services-wrap d-flex">
                    <a
                      href="#"
                      class="img"
                      style={{
                        backgroundImage: "url(../images/Cheese_Lovers.jpg)",
                      }}
                    ></a>
                    <div class="text p-4">
                      <h3>Cheese Lovers</h3>
                      <p>
                        Rich tomato sauce with a triple layer of mozzarella
                        cheese.
                      </p>
                      <p class="price">
                        <span>Rs. 980</span>{" "}
                        <a
                          href="#"
                          class="ml-2 btn btn-white btn-outline-white"
                        >
                          Order
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
                  <div class="services-wrap d-flex">
                    <a
                      href="#"
                      class="img"
                      style={{
                        backgroundImage: "url(../images/Tandoori_Chicken.jpg)",
                      }}
                    ></a>
                    <div class="text p-4">
                      <h3>Tandoori Chicken</h3>
                      <p>
                        Tandoori chicken &amp; onions with a double layer of
                        cheese.
                      </p>
                      <p class="price">
                        <span>Rs. 980</span>{" "}
                        <a
                          href="#"
                          class="ml-2 btn btn-white btn-outline-white"
                        >
                          Order
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
                  <div class="services-wrap d-flex">
                    <a
                      href="#"
                      class="img order-lg-last"
                      style={{
                        backgroundImage:
                          "url(../images/Hot_and_Spicy_Chicken.jpg)",
                      }}
                    ></a>
                    <div class="text p-4">
                      <h3>Hot &amp; Spicy Chicken</h3>
                      <p>
                        Spicy chunks of chicken, capsicums &amp; onions with a
                        double layer of cheese.
                      </p>
                      <p class="price">
                        <span>Rs. 980</span>{" "}
                        <a
                          href="#"
                          class="ml-2 btn btn-white btn-outline-white"
                        >
                          Order
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
                  <div class="services-wrap d-flex">
                    <a
                      href="#"
                      class="img order-lg-last"
                      style={{
                        backgroundImage: "url(../images/Black_Chicken.jpg)",
                      }}
                    ></a>
                    <div class="text p-4">
                      <h3>Black Chicken</h3>
                      <p>
                        Flavoursome pieces of black chicken and crunchy onion
                        with a double layer of cheese.
                      </p>
                      <p class="price">
                        <span>Rs. 980</span>{" "}
                        <a
                          href="#"
                          class="ml-2 btn btn-white btn-outline-white"
                        >
                          Order
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 d-flex ftco-animate fadeInUp ftco-animated">
                  <div class="services-wrap d-flex">
                    <a
                      href="#"
                      class="img order-lg-last"
                      style={{
                        backgroundImage: "url(../images/sausage_delight.jpg)",
                      }}
                    ></a>
                    <div class="text p-4">
                      <h3>Sausage Delight</h3>
                      <p>
                        Chicken sausages &amp; onions with a double layer of
                        cheese.
                      </p>
                      <p class="price">
                        <span>Rs. 840</span>{" "}
                        <a
                          href="#"
                          class="ml-2 btn btn-white btn-outline-white"
                        >
                          Order
                        </a>
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </Box>
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
                productState && productState.menuListResponse?.hasPreviousPage
              }
              hideNextButton={
                productState && productState.menuListResponse?.hasNextPage
              }
              count={productState && productState.menuListResponse?.totalPages}
              page={paginationModel.menuListResponse?.page}
              onChange={handlePaginate}
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default MenuList;
