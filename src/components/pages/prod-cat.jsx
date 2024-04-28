import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
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
import FormContainer from "./../FormContainer/form-container";
import FieldContainer from "./../FieldContainer/field-container";
import {saveCategory} from "./../../store/category/categoryAction";

import * as Yup from "yup";
import { Form, Formik } from "formik";

const prodCatSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED_MSG).trim(TRAILING_SPACES_MSG),
  description: Yup.string().required(REQUIRED_MSG),
});

const ProdCat = () => {
  const [value, setValue] = useState({ name: "", description: "" });
  const dispatch = useDispatch();
  const categoryState = useSelector(state => state.category);

  const handleSaveProdCat = (value) => {
    dispatch(saveCategory({
      "name": value.name,
      "description": value.description
    }));
  };

  useEffect(()=>{
    if(categoryState.catResponse && categoryState.catResponse.success){
      alert("Category added successfully!");
      setValue({ name: "", description: "" });
    }
  },[categoryState])

  return (
    <>
      <Header />
      
      <Box sx={{ marginLeft: "45px", width: "100%"}}>
        <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
          Product Category
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
                    validationSchema={prodCatSchema}
                    onSubmit={handleSaveProdCat}
                  >
                    {(props) => (
                      <Form>
                        <FieldContainer label="Name*" sx={{ marginBottom: 3 }}>
                          {/* <input type="text" className="form-control" placeholder="Name" name="name"> */}
                          <TextField
                            name="name"
                            type="text"
                            size="small"
                            data-testid={"name"}
                            placeholder={"name"}
                            fullWidth
                            value={props.values.name}
                            error={
                              props.errors.name === undefined ? false : true
                            }
                            helperText={props.errors.name}
                            onChange={(e) => {
                              props.setFieldValue(
                                e.target.name,
                                e.target.value
                              );
                            }}
                          />
                        </FieldContainer>

                        <FieldContainer
                          label="Description*"
                          sx={{ marginBottom: 3 }}
                        >
                          <TextField
                            name="description"
                            type="text"
                            size="small"
                            multiline={true}
                            data-testid={"description"}
                            placeholder={"description"}
                            fullWidth
                            value={props.values.description}
                            error={
                              props.errors.description === undefined
                                ? false
                                : true
                            }
                            helperText={props.errors.description}
                            onChange={(e) => {
                              props.setFieldValue(
                                e.target.name,
                                e.target.value
                              );
                            }}
                          />
                        </FieldContainer>

                        <div className="form-group">
                          {/* <input type="submit" value="Save" className="btn btn-primary py-3 px-5"> */}
                          <Button
                            data-testid={"createbtn"}
                            variant="contained"
                            type="submit"
                          >
                            Save Category
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

export default ProdCat;
