import React from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import Header from "./header";
import Footer from "./footer";

import FormContainer from "./../FormContainer/form-container";
import FieldContainer from "./../FieldContainer/field-container";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Validation schema using Yup
const profileSchema = Yup.object().shape({
  first_name: Yup.string().required('First Name is required'),
  last_name: Yup.string().required('Last Name is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  contact_number: Yup.string().required('Contact Number is required'),
});

const MyProfile = () => {
    return (
        <>
            <Header />

            <Box sx={{ marginLeft: "45px", width: "100%" }}>
    <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
        My Profile
    </Typography>
    <Box className="col-md-4">
        <FormContainer className="container">
            <Formik
                initialValues={{
                    user_type: 'customer',
                    first_name: '',
                    last_name: '',
                    address: '',
                    city: '',
                    contact_number: '',
                }}
                validationSchema={profileSchema}
                onSubmit={(values, actions) => {
                    // Handle form submission here
                }}
            >
                {props => (
                    <Form className="contact-form" encType="multipart/form-data">
                       

                        {/* FirstName field */}
                        <FieldContainer label="First Name" className="form-group">
                            <Field
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                name="first_name"
                                fullWidth
                            />
                            <ErrorMessage name="first_name" component="div" className="error-message" />
                        </FieldContainer>

                        {/* LastName field */}
                        <FieldContainer label="Last Name" className="form-group">
                            <Field
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                name="last_name"
                                fullWidth
                            />
                            <ErrorMessage name="last_name" component="div" className="error-message" />
                        </FieldContainer>

                        {/* Address field */}
                        <FieldContainer label="Address" className="form-group">
                            <Field
                                type="text"
                                className="form-control"
                                placeholder="Address"
                                name="address"
                                fullWidth
                            />
                            <ErrorMessage name="address" component="div" className="error-message" />
                        </FieldContainer>

                        {/* City field */}
                        <FieldContainer label="City" className="form-group">
                            <Field
                                type="text"
                                className="form-control"
                                placeholder="City"
                                name="city"
                                fullWidth
                            />
                            <ErrorMessage name="city" component="div" className="error-message" />
                        </FieldContainer>

                        {/* ContactNumber field */}
                        <FieldContainer label="Contact Number" className="form-group">
                            <Field
                                type="text"
                                className="form-control"
                                placeholder="Contact Number"
                                name="contact_number"
                                fullWidth
                            />
                            <ErrorMessage name="contact_number" component="div" className="error-message" />
                        </FieldContainer>

                        {/* Save button */}
                        <div className="form-group">
                            <Button variant="contained" type="submit" className="btn btn-primary py-3 px-5">
                                Save
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    </Box>
</Box>

            <Footer />
        </>
    );
};

export default MyProfile;
