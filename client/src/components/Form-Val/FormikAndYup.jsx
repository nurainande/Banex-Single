import { Formik, Form, Field } from "formik";
import { signupSchema } from "./schemas/index";
import "./FormikAndYup.css";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const FormikAndYup = () => {
  const [showPass, setShowPass] = useState(false);
  const handleAsync = async function(values,actions){
    try {
      const res = await fetch("http://127.0.0.1:3000/api/v1/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log(data);
      // actions.resetForm();
    } catch (error) {
      console.error(error);
    }
  }
  const onSubmit = (values, actions) => {
    console.log(values);
    handleAsync(values,actions)
      // actions.resetForm();

    

  };

  return (
    <div className="app">
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="signup_form">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <div className="error_container">
              {errors.name && touched.name && (
                <p className="form_error">{errors.name}</p>
              )}
            </div>

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <div className="error_container">
              {errors.email && touched.email && (
                <p className="form_error">{errors.email}</p>
              )}
            </div>

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <div className="error_container">
              {errors.password && touched.password && (
                <p className="form_error">{errors.password}</p>
              )}
            </div>

            <label htmlFor="cpassword">Confirm Password</label>
            <Field type={showPass ? "text" : "password"} name="passwordConfirm" />
            <span onClick={() => setShowPass((showpass) => !showPass)}>
              {showPass ? "hide" : "show"}
            </span>
            <div className="error_container">
              {errors.passwordConfirm && touched.passwordConfirm && (
                <p className="form_error">{errors.passwordConfirm}</p>
              )}
            </div>

            <button type="submit" disabled={false}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAndYup;
