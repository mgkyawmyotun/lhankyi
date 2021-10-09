import * as yup from 'yup';
export const cardValidationSchema = yup.object().shape({
  card_name: yup
    .string()
    .max(20)
    .required(),
  card_data_back: yup.string(),
  card_data_front: yup.string(),
  desk_name: yup.string().required(),
});
