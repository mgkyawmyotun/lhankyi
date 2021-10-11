import * as yup from 'yup';
export const registerSchema = yup.object({
  name: yup
    .string()
    .max(15, 'Must be 15 characters or less')
    .min(3, 'Must be at leat 3 characters')
    .required(),
  email: yup.string().email('Invalid email address').required(),
  password: yup.string().min(6).required(),
});

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required(),
  password: yup.string().min(6).required(),
});
