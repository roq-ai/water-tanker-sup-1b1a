import * as yup from 'yup';

export const operationsManagerValidationSchema = yup.object().shape({
  department: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
