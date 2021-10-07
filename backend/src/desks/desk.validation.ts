import * as yup from 'yup';
export const deskValidationSchema = yup.object().shape({
  name: yup.string().required(),
});
