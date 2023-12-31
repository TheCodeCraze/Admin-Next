import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Enter valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});
