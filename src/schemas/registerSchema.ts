import * as yup from "yup";

export const registerSchema = yup.object({
	email: yup.string().email("Please enter an email address.").required("Email is required."),
	password: yup
		.string()
		.min(6, "Password must be at least 6 characters long.")
		.max(20, "Password cannot be longer than 20 characters.")
		.required("Password is required."),
	confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match.").required('Passwords must match.'),
    firstName: yup.string().max(40, 'Name too long.').required('First name is required.'),
    lastName: yup.string().max(40, "Name too long.").required('Last name is required.'),
});
