import * as yup from 'yup';

export const schemaContact = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().notRequired(), // Делаем телефон необязательным в схеме Yup
  date: yup.date().required('Date is required'),
  ceremonyLocation: yup.string().notRequired(),
  notice: yup.string().notRequired(),
  preferredContact: yup.array().of(yup.string()).notRequired(),
});

export type FormSchema = yup.InferType<typeof schemaContact>;
