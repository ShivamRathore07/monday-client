import React, { useState } from "react";
import "../Css_Files/signup.scss";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Input from "../../controls/input";
import { FiEye } from "react-icons/fi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Profession from "../SetOfQuestions/StepFirstQuestion";
import StepTwoQuestion from "../SetOfQuestions/StepTwoQuestion";
import StepThirdQuestion from "../SetOfQuestions/StepThirdQuestion";
import StepForthQuestion from "../SetOfQuestions/StepForthQuestion";
import StepFiveQuestion from "../SetOfQuestions/StepFiveQuestion";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [active, setActive] = useState({
    signup: true,
    questionOne: false,
    questionTwo: false,
    questionThird: false,
    questionForth: false,
    questionFive: false,
  });

  const [formData, setformData] = useState({});

  const navigate = useNavigate();
  
  console.log(formData)
  const signInValidationSchema = Yup.object().shape({
    userName: Yup.string().required("UserName is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .test(
        "regex",
        "Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
        (val) => {
          let regExp = new RegExp(
            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$"
          );
          return regExp.test(val);
        }
      ),
  });

  const handleFormChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const signInHandler=(values)=>{
    console.log(values)
    setActive({
      ...active,
      signup: false,
      questionOne: true,
    });
  }

  // dispatch(signUp({values,navigate}))
  const options = [
    { value: "USER", label: "User" },
    { value: "ADMIN", label: "Admin" },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      height: "6vh",
      marginBottom: "2.5vh",
    }),
  };

  return (
    <>
      {active.signup ? (
        <div className="signupPage">
          <div className="form">
            <p className="batch">Create a new account</p>
            <Formik
              initialValues={{
                userName: formData.userName,
                email: formData.email,
                password: formData.password,
                role: formData.role,
              }}
              validationSchema={signInValidationSchema}
              enableReinitialize
              onSubmit={signInHandler}
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
                    label="User Name"
                    name="userName"
                    type="text"
                    value={values.userName}
                    onChange={(e) => handleFormChange(e)}
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => handleFormChange(e)}
                    onBlur={handleBlur}
                  />
                  <div>
                    <label>Role</label>
                    <Select
                      options={options}
                      name="role"
                      styles={customStyles}
                      placeholder="Role"
                      value={options.find(
                        (option) => option.value === values.role
                      )}
                      onChange={(val) =>
                        setformData({ ...formData, role: val.value })
                      }
                    />
                  </div>
                  <div className="password">
                    <Input
                      label="Password"
                      name="password"
                      value={values.password}
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => handleFormChange(e)}
                      onBlur={handleBlur}
                    />

                    <div>
                      {showPassword ? (
                        <FiEye onClick={() => setShowPassword(false)} />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}                  >
                    Continue
                  </button>
                  <p className="already">
                    Already have an account?{" "}
                    <span
                      style={{ cursor: "pointer", color: "#6161ff" }}
                      onClick={() => navigate("/login")}
                    >
                      Log in
                    </span>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : active.questionOne ? (
        <Profession
          {...{ handleFormChange, formData, setActive, active }}
        />
      ) : active.questionTwo ? (
        <StepTwoQuestion
          {...{ handleFormChange, formData, setActive, active }}
        />
      ) : active.questionThird ? (
        <StepThirdQuestion
          {...{handleFormChange, formData, setActive, active }}
        />
      ) : active.questionForth ? (
        <StepForthQuestion
          {...{handleFormChange, formData, setActive, active }}
        />
      ) : active.questionFive ? (
        <StepFiveQuestion
            {...{handleFormChange, formData, setActive, active }}
          />
      ):(
        ""
      )}
    </>
  );
};

export default Signup;
