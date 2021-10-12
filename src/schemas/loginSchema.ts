import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup.string().email('Email must be a valid email.'),
    password: yup.string()
})