import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from "@mui/material";
import Header from "./header";
import Footer from "./footer";

import FormContainer from "./../FormContainer/form-container";
import FieldContainer from "./../FieldContainer/field-container";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const productListSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  // Add validation for other fields as needed
});

const ProductList = () => {
  return (
    <>
      <Header />

      <Box sx={{ marginLeft: "45px", width: "100%" }}>
        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
          Product Details
        </Typography>
        <Box className="ftco-section contact-section mt-5">
          <div className="container">
            <div className="row block-9">
              <div className="col-md-1"></div>
              <div className="col-md-6 ">
                <FormContainer className="contact-form" encType="multipart/form-data">
                  <Formik
                    initialValues={{
                      name: '',
                      description: '',
                      category: 'pizza',
                      crustType: 'thin',
                      variant: 'regular',
                      price: '',
                      validFrom: '',
                      validTo: '',
                    }}
                    validationSchema={productListSchema}
                    onSubmit={(values, actions) => {
                      // Handle form submission here
                    }}
                  >
                    {props => (
                      <Form>
                        {/* Product */}
                        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
                          Product
                        </Typography>

                        {/* Name field */}
                        <FieldContainer label="Name" className="form-group">
                          <Field
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            fullWidth
                          />
                          <ErrorMessage name="name" component="div" className="error-message" />
                        </FieldContainer>

                        {/* Description field */}
                        <FieldContainer label="Description" className="form-group">
                          <Field
                            multiline
                            rows={4}
                            className="form-control"
                            placeholder="Description"
                            name="description"
                            fullWidth
                          />
                          <ErrorMessage name="description" component="div" className="error-message" />
                        </FieldContainer>

                        {/* Product image upload */}
                        <input type="file" className="form-control-file" name="image" />

                        {/* Save button for Name and Description */}
                        <div className="form-group">
                          <Button variant="contained" type="submit" className="btn btn-primary py-3 px-5">
                            Save
                          </Button>
                          <Button variant="contained" className="btn btn-primary py-3 px-5">
                            Add New
                          </Button>
                        </div>

                        {/* Separation line */}
                        <hr />

                        {/* Product Details */}
                        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
                          Product Details
                        </Typography>

                        {/* Product category dropdown */}
                        <FieldContainer label="Product Category" className="form-group">
                          <Field as="select" className="form-control" name="category">
                            <option value="pizza">Pizza</option>
                            <option value="pasta">Pasta</option>
                            <option value="salad">Salad</option>
                            {/* Add more options as needed */}
                          </Field>
                        </FieldContainer>

                        {/* Crust Type dropdown */}
                        <FieldContainer label="Crust Type" className="form-group">
                          <Field as="select" className="form-control" name="crustType">
                            <option value="thin">Thin Crust</option>
                            <option value="thick">Thick Crust</option>
                            {/* Add more options as needed */}
                          </Field>
                        </FieldContainer>

                        {/* Product variant dropdown */}
                        <FieldContainer label="Product Variant" className="form-group">
                          <Field as="select" className="form-control" name="variant">
                            <option value="regular">Regular</option>
                            <option value="large">Large</option>
                            {/* Add more options as needed */}
                          </Field>
                        </FieldContainer>

                        <div className="form-group">
                          <Button variant="contained" type="submit" className="btn btn-primary py-3 px-5">
                            Save
                          </Button>
                          <Button variant="contained" className="btn btn-primary py-3 px-5">
                            Add New
                          </Button>
                        </div>

                        {/* Product Prices */}
                        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
                          Product Prices
                        </Typography>

                        {/* Product price */}
                        <FieldContainer label="Product Price" className="form-group">
                          <Field
                            type="number"
                            className="form-control"
                            placeholder="Product Price"
                            name="price"
                            fullWidth
                          />
                        </FieldContainer>

                        {/* Valid from calendar */}
                        <FieldContainer label="Valid From" className="form-group">
                          <Field
                            type="date"
                            className="form-control"
                            name="validFrom"
                          />
                        </FieldContainer>

                        {/* Valid To calendar */}
                        <FieldContainer label="Valid To" className="form-group">
                          <Field
                            type="date"
                            className="form-control"
                            name="validTo"
                          />
                        </FieldContainer>

                        <div className="form-group">
                          <Button variant="contained" type="submit" className="btn btn-primary py-3 px-5">
                            Save
                          </Button>
                          <Button variant="contained" className="btn btn-primary py-3 px-5">
                            Add New
                          </Button>
                        </div>

                        {/* Table */}
                        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
                          Product List
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <TableContainer>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Product Type</TableCell>
                                    <TableCell>Crust Type</TableCell>
                                    <TableCell>Product Variant</TableCell>
                                    <TableCell>Product Price</TableCell>
                                    <TableCell>Valid From</TableCell>
                                    <TableCell>Valid To</TableCell>
                                    <TableCell>Action</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {/* Rows go here */}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Grid>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </FormContainer>
              </div>
            </div>
          </div>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ProductList;
