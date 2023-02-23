import React, { useEffect } from "react";
import "../Css_Files/signup.scss";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Input from "../../controls/input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneData, updatePrice } from "../../Redux/Actions/priceAction";

const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getPrice } = useSelector((s) => s.priceReducer);

  useEffect(()=>{
   dispatch(getOneData("63f5c489f130d24050545c4a"))
  },[])

//validation
  const signInValidationSchema = Yup.object().shape({
    basic: Yup.number()
    .required("Basic price is Required")
    .positive("Must be Positive"),
    standard: Yup.number()
    .required("Standard price is Required")
    .positive("Must be Positive"),
    pro: Yup.number()
    .required("Pro price is Required")
    .positive("Must be Positive"),
    enterprise: Yup.number()
    .required("Enterprise price is Required")
    .positive("Must be Positive"),
  });

  //formhandler
  const signInHandler = async (values) => {
    dispatch(updatePrice({values,navigate}))
  };

  return (
    <>
      <div className="signupPage">
        <div className="form">
          <p className="batch">Edit a prices</p>
          <Formik
            initialValues={{
              basic: getPrice.basic,
              standard: getPrice.standard,
              pro: getPrice.pro,
              enterprise: getPrice.enterprise
            }}
            onSubmit={signInHandler}
            validationSchema={signInValidationSchema}
            enableReinitialize
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              handleBlur,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit} autoComplete="off">
                <Input
                  label="Basic Price"
                  name="basic"
                  value={values.basic}
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Input
                  label="Standard Price"
                  name="standard"
                  type="number"
                  value={values.standard}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  label="Pro Price"
                  name="pro"
                  type="number"
                  value={values.pro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  label="Enterprise Price"
                  name="enterprise"
                  type="number"
                  value={values.enterprise}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button onClick={handleSubmit}>Update Prices</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Edit;
