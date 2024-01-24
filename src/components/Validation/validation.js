import * as Yup from "yup";

export const signUp = Yup.object({
  firstName: Yup.string()
    .min(3)
    .max(15)
    .required("Please Enter Your Firstname"),
  lastName: Yup.string().min(3).max(15).required("Please Enter Your Lastname"),
  email: Yup.string().email().required("Please Enter Valid Email Address"),

  password: Yup.string().min(8).required("Please Enter Password"),
  telephone: Yup.string().required("Please Enter Your Telephone Number"),
  address: Yup.string().required("Please Enter Your address"),
  city: Yup.string().required("Please Enter Your city"),
  postCode: Yup.string().required("Please Enter Your postCode"),
  country: Yup.string().required("Please Enter Your country"),
  state: Yup.string().required("Please Enter Your state"),
});

export const signIn = Yup.object({
  email: Yup.string().email().required("Please Enter Email Address"),
  password: Yup.string().min(8).required("Please Enter Password"),
});
