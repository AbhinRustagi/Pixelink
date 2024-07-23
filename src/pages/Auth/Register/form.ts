import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string(),
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});
