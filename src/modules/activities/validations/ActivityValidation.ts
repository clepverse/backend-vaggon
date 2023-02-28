import * as yup from 'yup';

export const activityValidation = yup.object({
  name: yup
    .string()
    .min(1, 'The name needs to be at least 1 char')
    .max(24, 'The name cannot exceed 24 char')
    .required('The name is required'),
  description: yup
    .string()
    .min(1, 'The description needs to be at least 1 char')
    .max(256, 'The description cannot exceed 256 char')
    .required('The description is required'),
  start_date_and_time: yup.string().required('The date is required'),
  end_date_and_time: yup.string().required('The date is required'),
});
