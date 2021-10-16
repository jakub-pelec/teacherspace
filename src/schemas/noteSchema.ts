import * as yup from 'yup';

export const noteSchema = yup.object({
    title: yup.string().required('Title is required.'),
    subject: yup.string().required('Title is required.'),
    content: yup.string().required('Content is required.'),
    classes: yup.array(yup.object({
        value: yup.string(),
        title: yup.string()
    })).required()
})