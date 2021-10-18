import * as yup from 'yup';
export const cardValidationSchema = yup.object().shape({
  card_name: yup
    .string()
    .max(15)
    .required(),
  card_data_back: yup.string(),
  card_data_front: yup.string(),
  desk_name: yup.string(),
});
export const cardEditValidationSchema = yup.object().shape({
  card_name: yup.string().max(15),
  card_data_back: yup.string(),
  card_data_front: yup.string(),
  card_id: yup
    .string()
    .uuid()
    .required(),
});
