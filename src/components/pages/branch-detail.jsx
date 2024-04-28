import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Header from "./header";
import Footer from "./footer";
import FormContainer from "./../FormContainer/form-container";
import FieldContainer from "./../FieldContainer/field-container";

import * as Yup from "yup";
import { Form, Formik } from "formik";

const BranchDetail = () => {
  return (
    <>
      <Header />

      <Box sx={{ marginLeft: "45px", width: "100%" }}>
        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread ">
          Branch Detail
        </Typography>
        <Box className="col-md-4">
          <div className="container">
            <div className="row block-9">
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <Formik
                  initialValues={{
                    number: "",
                    address1: "",
                    address2: "",
                    city: "",
                    contact_number: "",
                  }}
                  onSubmit={(values, actions) => {
                    // Handle form submission here
                  }}
                >
                  {(props) => (
                    <Form
                      className="contact-form"
                      encType="multipart/form-data"
                    >
                      {/* Number field */}
                      <FieldContainer label="Number">
                        <TextField
                          type="text"
                          className="form-control"
                          placeholder="Number"
                          name="number"
                          fullWidth
                        />
                      </FieldContainer>

                      {/* Address 1 field */}
                      <FieldContainer label="Address 1">
                        <TextField
                          type="text"
                          className="form-control"
                          placeholder="Address 1"
                          name="address1"
                          fullWidth
                        />
                      </FieldContainer>

                      {/* Address 2 field */}
                      <FieldContainer label="Address 2">
                        <TextField
                          type="text"
                          className="form-control"
                          placeholder="Address 2"
                          name="address2"
                          fullWidth
                        />
                      </FieldContainer>

                      {/* City field */}
                      <FieldContainer label="City">
                        <TextField
                          type="text"
                          className="form-control"
                          placeholder="City"
                          name="city"
                          fullWidth
                        />
                      </FieldContainer>

                      {/* Contact Number field */}
                      <FieldContainer label="Contact Number">
                        <TextField
                          type="text"
                          className="form-control"
                          placeholder="Contact Number"
                          name="contact_number"
                          fullWidth
                        />
                      </FieldContainer>

                      <div className="form-group">
                        <Button
                          variant="contained"
                          type="submit"
                          className="btn btn-primary py-3 px-5"
                        >
                          Save
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default BranchDetail;
