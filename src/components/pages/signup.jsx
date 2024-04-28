import { useState, useEffect } from "react";
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
import FormContainer from "../FormContainer/form-container";
import FieldContainer from "../FieldContainer/field-container";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Header from "./header";
import Footer from "./footer";
import { createCustomerAccount } from "../../store/auth/authAction";

const signupSchema = Yup.object().shape({
  username: Yup.string().required(REQUIRED_MSG).trim(TRAILING_SPACES_MSG),
  password: Yup.string().required(REQUIRED_MSG),
  email: Yup.string().required(REQUIRED_MSG).email(INVALID_EMAIL_MSG),
  name: Yup.string().required(REQUIRED_MSG),
  phoneNumber: Yup.string().required(REQUIRED_MSG),
});

const Signup = () => {
  const [value, setValue] = useState({ username: "", password: "", email: "", name: "", phoneNumber: "", role: "" });
  const dispatch = useDispatch();
  const { createCustomerResponse, createCustomerResponseLoading, createCustomerResponseError } = useSelector(
    (state) => state.auth
  );

  const handleSignup = (value) => {
    dispatch(
      createCustomerAccount({
        username: value.username,
        password: value.password,
        email: value.email,
        name: value.name,
        phoneNumber: value.phoneNumber,
        role: "Customer",
      })
    );
  };

  useEffect(() => {
    if (createCustomerResponse && createCustomerResponse.success) {
      alert("Signed in successfully!");
      setValue({ username: "", password: "" });
    }

    if (createCustomerResponse && createCustomerResponse.errors) {
      alert(createCustomerResponse.errors[0].description);
    }
  }, [createCustomerResponse]);

  useEffect(() => {
    if (createCustomerResponseError && createCustomerResponseError.response.data.Errors) {
      alert(createCustomerResponseError.response.data.Errors[0].description);
    }
  }, [createCustomerResponseError]);

  return (
    <>
      <Header />

      <Box sx={{ marginLeft: "45px", width: "100%" }}>
        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
          Sign Up
        </Typography>
        <Box>
          <Box className="row">
            <div className="col-md-4">
              <FormContainer
                className="form"
                formTitle=""
                sx={{ border: "none" }}
              >
                <Formik
                  initialValues={value}
                  validationSchema={signupSchema}
                  onSubmit={handleSignup}
                >
                  {(props) => (
                    <Form>
                      <FieldContainer
                        label="Username*"
                        sx={{ marginBottom: 3 }}
                      >
                        {/* <input type="text" className="form-control" placeholder="Name" name="name"> */}
                        <TextField
                          name="username"
                          type="text"
                          size="small"
                          data-testid={"username"}
                          placeholder={"Username"}
                          fullWidth
                          value={props.values.username}
                          error={
                            props.errors.username === undefined ? false : true
                          }
                          helperText={props.errors.username}
                          onChange={(e) => {
                            props.setFieldValue(e.target.name, e.target.value);
                          }}
                        />
                      </FieldContainer>

                      <FieldContainer
                        label="Password*"
                        sx={{ marginBottom: 3 }}
                      >
                        <TextField
                          name="password"
                          type="password"
                          size="small"
                          data-testid={"password"}
                          placeholder={""}
                          fullWidth
                          value={props.values.password}
                          error={
                            props.errors.password === undefined ? false : true
                          }
                          helperText={props.errors.password}
                          onChange={(e) => {
                            props.setFieldValue(e.target.name, e.target.value);
                          }}
                        />
                      </FieldContainer>

                      <FieldContainer
                        label="Email*"
                        sx={{ marginBottom: 3 }}
                      >
                        {/* <input type="text" className="form-control" placeholder="Name" name="name"> */}
                        <TextField
                          name="email"
                          type="text"
                          size="small"
                          data-testid={"email"}
                          placeholder={"Email"}
                          fullWidth
                          value={props.values.email}
                          error={
                            props.errors.email === undefined ? false : true
                          }
                          helperText={props.errors.email}
                          onChange={(e) => {
                            props.setFieldValue(e.target.name, e.target.value);
                          }}
                        />
                      </FieldContainer>

                      <FieldContainer
                        label="Your Name*"
                        sx={{ marginBottom: 3 }}
                      >
                        {/* <input type="text" className="form-control" placeholder="Name" name="name"> */}
                        <TextField
                          name="name"
                          type="text"
                          size="small"
                          data-testid={"name"}
                          placeholder={"Name"}
                          fullWidth
                          value={props.values.name}
                          error={
                            props.errors.name === undefined ? false : true
                          }
                          helperText={props.errors.name}
                          onChange={(e) => {
                            props.setFieldValue(e.target.name, e.target.value);
                          }}
                        />
                      </FieldContainer>

                      <FieldContainer
                        label="Phone Number*"
                        sx={{ marginBottom: 3 }}
                      >
                        {/* <input type="text" className="form-control" placeholder="Name" name="name"> */}
                        <TextField
                          name="phoneNumber"
                          type="text"
                          size="small"
                          data-testid={"phoneNumber"}
                          placeholder={"Phone Number"}
                          fullWidth
                          value={props.values.phoneNumber}
                          error={
                            props.errors.phoneNumber === undefined ? false : true
                          }
                          helperText={props.errors.phoneNumber}
                          onChange={(e) => {
                            props.setFieldValue(e.target.name, e.target.value);
                          }}
                        />
                      </FieldContainer>

                      <div className="form-group">
                        <Button
                          data-testid={"createbtn"}
                          variant="contained"
                          type="submit"
                          color="warning"
                        >
                          Sign Up
                        </Button>
                        
                      </div>
                    </Form>
                  )}
                </Formik>
              </FormContainer>
            </div>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Signup;
