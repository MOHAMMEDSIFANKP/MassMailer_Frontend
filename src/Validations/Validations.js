import * as Yup from "yup";

export const LoginSchema = Yup.object({
    email: Yup.string().trim().email().required("Please enter your email id"),
    password: Yup.string().trim().min(4).required("Please enter password"),
  });
  