import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be of minimum 8 characters length"),
  })
  .required();
