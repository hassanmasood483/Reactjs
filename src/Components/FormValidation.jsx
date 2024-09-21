import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const FormValidation = () => {
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    gender: "",
    termsAndcond: false,
    transportMode: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().email().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
    gender: yup.string().required("Please select your gender"),
    termsAndcond: yup
      .boolean()
      .oneOf([true], "Please accept terms and conditions first"),
    transportMode: yup.string().required("Please select a transport mode"),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={defaultValue}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <Field type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" />
          </div>

          <div>
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" />
          </div>

          <div>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" />
          </div>

          <div>
            <Field component="select" name="gender">
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <ErrorMessage name="gender" />
          </div>

          <div>
            <label>
              <Field type="checkbox" name="termsAndcond" />I accept terms and
              conditions
            </label>
            <ErrorMessage name="termsAndcond" />
          </div>

          <div>
            <label>
              <Field type="radio" name="transportMode" value="bike" />
              Bike
            </label>

            <label>
              <Field type="radio" name="transportMode" value="car" />
              Car
            </label>
            <ErrorMessage name="transportMode" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormValidation;
