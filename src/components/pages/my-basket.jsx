import { useEffect, useState } from "react";
import Header from "./header";
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
  getTokenFromLocalStorage,
  removeToken,
  setTokenToLocalStorage,
} from "../../helpers/manageLocalStorage";
import { useSelector } from "react-redux";
import { crustType, variantType } from "../../enums/common";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const MyBasket = () => {
  const [total, setTotal] = useState();
  const [refreshWithCart, setRefreshWithCart] = useState(false);
  const [productList, setProductList] = useState([]);
  const [basketData, setBasketData] = useState();
  const productState = useSelector((state) => state.product);
  const { authResponse, authResponseLoading, authResponseError } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const columns = [
    {
      field: "",
      headerName: "#",
      width: 100,
      renderCell: (params) => {
        return (
          <div
            class="img"
            style={{
              width: "120px",
              height: "120px",
              backgroundImage: `url(${
                params.row.imagePath && params.row.imagePath.length > 3
                  ? params.row.imagePath
                  : "../images/Chilli_Chicken_Pizza.jpg"
              })`,
            }}
          ></div>
        );
      },
    },
    { field: "product", headerName: "Product", width: 150 },
    {
      field: "description",
      headerName: "Description",
      width: 150,
    },
    {
      field: "selectedCrust",
      headerName: "Crust",
      width: 150,
    },
    {
      field: "seletcedVariant",
      headerName: "Variant",
      type: "number",
      width: 110,
    },
    {
      field: "qty",
      headerName: "Quantity",
      type: "number",
      width: 110,
      renderCell: (params) => {
        return (
          <TextField
            value={params.row.qty}
            type="number"
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => {
              const newBasketData = basketData.map((i) => {
                if (i.id === params.row.id) {
                  return {
                    ...i,
                    qty: e.target.value,
                    subtotal: parseFloat(e.target.value) * parseFloat(i.price),
                  };
                } else {
                  return i;
                }
              });
              setBasketData(newBasketData);

              const currentCart = getTokenFromLocalStorage("dp-cart");
              const updateBasket =
                currentCart &&
                currentCart.map((i) => {
                  return {
                    ...i,
                    qty: i.product === params.row.id ? e.target.value : i.qty,
                  };
                });
              setTokenToLocalStorage("dp-cart", updateBasket);
            }}
          />
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 110,
    },
    {
      field: "subtotal",
      headerName: "Sub total",
      type: "number",
      width: 110,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const currentCart = getTokenFromLocalStorage("dp-cart");
              const removeBasket =
                currentCart &&
                currentCart.filter((i) => {
                  if (i.product !== params.row.id) {
                    return i;
                  }
                });
              setTokenToLocalStorage("dp-cart", removeBasket);

              if(removeBasket.length ===0){
                removeToken("dp-cart");
              }
              setRefreshWithCart(true);
            }}
          >
            Remove
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    const currentCart = getTokenFromLocalStorage("dp-cart");
    if (productList.length < 1) {
      return;
    }
    const prepareBasketData =
      currentCart &&
      currentCart.map((i) => {
        const selectedProduct = productList.find((x) => x.id === i.product);
        const productDetail =
          selectedProduct &&
          selectedProduct.productDetails.find(
            (x) => x.crustTypeId === i.crust && x.productVarientId === i.variant
          );
        const selectedCrust = crustType.find((x) => x.id === i.crust);
        const selectedVariant = variantType.find((x) => x.id === i.variant);
        return {
          id: i.product,
          imagePath: selectedProduct ? selectedProduct.imagePath : "",
          product: selectedProduct ? selectedProduct.name : "",
          description: selectedProduct ? selectedProduct.description : "",
          selectedCrust: selectedCrust && selectedCrust.type,
          seletcedVariant: selectedVariant && selectedVariant.type,
          qty: i.qty,
          price:
            productDetail && productDetail.productPrice
              ? productDetail.productPrice.price
              : 0,
          productDetailId: i.productDetailId,
          subtotal:
            parseFloat(i.qty) *
            parseFloat(
              productDetail && productDetail.productPrice
                ? productDetail.productPrice.price
                : 0
            ),
        };
      });
    setBasketData(prepareBasketData);
    setRefreshWithCart(false);
  }, [productList, refreshWithCart]);

  useEffect(() => {
    productState &&
      productState.menuListResponse &&
      productState.menuListResponse.data &&
      setProductList(productState.menuListResponse.data);
  }, [productState]);

  useEffect(() => {
    let newTotal = 0;
    basketData &&
      basketData.map((i) => {
        newTotal = parseFloat(newTotal) + parseFloat(i.subtotal);

        return {
          ...i,
        };
      });
    setTotal(newTotal);
  }, [basketData]);

  return (
    <>
      <Header />

      <Box sx={{ marginLeft: "100px", width: "100%" }}>
        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
          My Basket
        </Typography>
        <Box>
          <Box className="row" sx={{ width: "1100px" }}>
            {/* {JSON.stringify(productList)} */}
            {/* {JSON.stringify(basketData)} */}
            {/* {JSON.stringify(authResponse)} */}
            {basketData && (
              <DataGrid
                sx={{ color: "#fff" }}
                rows={basketData}
                columns={columns}
                hideFooterPagination
              />
            )}
          </Box>
          {basketData && (
            <>
              <Box
                className="row"
                sx={{ width: "1100px", justifyContent: "flex-end", pt: 3 }}
              >
                <Typography variant="h6">
                  Your current total: Rs {total}
                </Typography>
              </Box>
              <Box
                className="row"
                sx={{ width: "1100px", justifyContent: "flex-end", pt: 3 }}
              >
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    if (authResponse) {
                      navigate("/checkout");
                    } else {
                      alert("Please sign in to continue!");
                      navigate("/signin");
                    }
                  }}
                >
                  Checkout
                </Button>
              </Box>
            </>
          )}
          {!basketData && (
            <Box
              sx={{
                width: "1100px",
                justifyContent: "flex-start",
                pl: 3,
                pt: 3,
              }}
            >
              <Typography variant="h5">Your basket is empty! </Typography>{" "}
              <Typography variant="h6">
                Please check the menu and select your favorite!
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MyBasket;
