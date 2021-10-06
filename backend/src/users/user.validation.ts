import * as yup from 'yup';
export const userValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .max(50)
    .matches(/^[A-Za-z0-9-_.!~*'()]+$/g, {
      message: "Only accept url allow char A-Za-z0-9-_.!~*'() ",
    })
    .required(),
  email: yup
    .string()
    .email()
    .max(255)
    .required(),
  password: yup
    .string()
    .min(5)
    .required(),
});
