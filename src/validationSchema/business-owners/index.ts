import * as yup from 'yup';

export const businessOwnerValidationSchema = yup.object().shape({
  business_name: yup.string().required(),
  business_address: yup.string().required(),
  business_contact: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
