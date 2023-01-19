import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const registerSchema = Yup.object({
  name: Yup.string().min(4).max(25).required("This field is required"),
  email: Yup.string().email().required("This field is required"),
  tel: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  password: Yup.string().min(8).required("This field is required"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Please enter same password"),
});
