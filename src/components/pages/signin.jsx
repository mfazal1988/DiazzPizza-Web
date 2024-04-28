import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
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
import FormContainer from "./../FormContainer/form-container";
import FieldContainer from "./../FieldContainer/field-container";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Header from "./header";
import Footer from "./footer";
import { authenticate } from "./../../store/auth/authAction";
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
} from "../../helpers/manageLocalStorage";

const loginSchema = Yup.object().shape({
  username: Yup.string().required(REQUIRED_MSG).trim(TRAILING_SPACES_MSG),
  password: Yup.string().required(REQUIRED_MSG),
});

const Signin = () => {
  const [value, setValue] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authResponse, authResponseLoading, authResponseError } = useSelector(
    (state) => state.auth
  );

  const handleSignin = (value) => {
    dispatch(
      authenticate({
        username: value.username,
        password: value.password,
      })
    );
  };

  useEffect(() => {
    if (authResponse && authResponse.success) {
      alert("Signed in successfully!");
      setValue({ username: "", password: "" });
      setTokenToLocalStorage("user", authResponse.data.jwToken);
      if(authResponse.data.roles[0] === "Customer"){
        navigate('/menu-list');
      }else if(authResponse.data.roles[0] === "Administrator"){
        navigate('/order-details');
      }
      
    }

    if (authResponse && authResponse.errors) {
      alert(authResponse.errors[0].description);
    }
  }, [authResponse]);

  useEffect(() => {
    if (authResponseError && authResponseError.response.data.errors) {
      alert(authResponseError.response.data.errors[0].description);
    }
  }, [authResponseError]);

  return (
    <>
      <Header />

      <Box sx={{ marginLeft: "45px", width: "100%" }}>
        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
          Sign In
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
                  validationSchema={loginSchema}
                  onSubmit={handleSignin}
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

                      <div className="form-group">
                        <Button
                          data-testid={"createbtn"}
                          variant="contained"
                          type="submit"
                          color="warning"
                        >
                          Sign In
                        </Button>
                        <Box display={"flex"} sx={{ mt: 3 }}>
                          <Typography sx={{ mt: 2 }} alignSelf={"center"}>
                            No account yet?{" "}
                          </Typography>
                          <Button
                            sx={{ mt: 1, ml: 3, alignSelf: "center" }}
                            variant="outlined"
                            onClick={() => navigate('/signup')}
                          >
                            Signup Here
                          </Button>
                        </Box>
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

export default Signin;
