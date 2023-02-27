import * as yup from 'yup';

export const userValidation = yup.object({
  login: yup
    .string()
    .trim('The login cannot include leading and trailing spaces')
    .strict(true)
    .min(3, 'The login needs to be at least 3 char')
    .max(24, 'The login cannot exceed 24 char')
    .required('The login is required'),
  password: yup
    .string()
    .trim('The passaword cannot include leading and trailing spaces')
    .strict(true)
    .min(6, 'The password name needs to be at least 6 char')
    .max(256, 'The password cannot exceed 256 char')
    .required('The password is required'),
});
