import * as yup from 'yup';

export const updateActivityValidation = yup.object({
  name: yup
    .string()
    .min(1, 'The name needs to be at least 1 char')
    .max(24, 'The name cannot exceed 24 char'),
  description: yup
    .string()
    .min(1, 'The description needs to be at least 1 char')
    .max(256, 'The description cannot exceed 256 char'),
  start_date_and_time: yup.string(),
  end_date_and_time: yup.string(),
});
