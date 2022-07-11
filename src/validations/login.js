import * as yup from "yup";

export const validationSchema = yup.object({
  tab1: yup.object().shape({
    name: yup.string("Enter your name").required("Name is required"),
    name2: yup.string("Enter your name").required("Name is required"),
    name3: yup.string("Enter your name").required("Name is required"),
  }),
  tab2: yup.object().shape({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  }),
  tab3: yup.object().shape({
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  }),
});
