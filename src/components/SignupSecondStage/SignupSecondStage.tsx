import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import FormSelectField from "../../shared/form-components/FormSelectField/FormSelectField";
import { useForm } from "react-hook-form";
import { Button } from "../../shared/components/Button/Button";
import { subjectOptions, classOptions } from "./options";
import { connect } from "react-redux";
import { register } from "../../actions/actions";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

import { Wrapper, FormField, FormContainer, Title, ContentColumnRight, ContentColumnLeft, Background, Form } from "./Elements";
import { CircularProgress } from "@material-ui/core";
import { Helmet } from "react-helmet";

interface IProps extends RouteComponentProps {
	registerProps: any;
}

const SignupSecondStage: React.FC<IProps> = ({ registerProps }) => {
	const { push } = useHistory();
	const { enqueueSnackbar } = useSnackbar();
	const [loading, setLoading] = useState<boolean>(false);
	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const submitHandler = (formData: any) => {
		setLoading(true);
		const { classes, subjects } = formData;
		const successCallback = () => {
			enqueueSnackbar("Welcome!", { variant: "success" });
			push("/dashboard");
		};
		const errorCallback = () => {
			enqueueSnackbar("Oops. Something went wrong!", { variant: "error" });
		};
		const finalCallback = () => {
			setLoading(false);
		};
		registerProps({ classes, subjects, successCallback, errorCallback, finalCallback });
	};
	return (
		<>
			<Helmet>
				<title>Teacherspace - Create account</title>
			</Helmet>
			<Wrapper>
				<FormContainer>
					<ContentColumnRight>
						<Background />
					</ContentColumnRight>
					<ContentColumnLeft>
						<Title>Let's get to know each other!</Title>
						<Form onSubmit={handleSubmit(submitHandler)}>
							<FormField>
								<FormSelectField
									options={subjectOptions}
									control={control}
									name="subjects"
									errored={errors.subject?.message}
									placeholder="Subject"
								/>
							</FormField>
							<FormField>
								<FormSelectField
									options={classOptions}
									control={control}
									name="classes"
									errored={errors.class?.message}
									placeholder="Class"
								/>
							</FormField>
							<Button type="submit" disabled={loading}>
								{loading ? <CircularProgress size={23} /> : "Register"}
							</Button>
						</Form>
					</ContentColumnLeft>
				</FormContainer>
			</Wrapper>
		</>
	);
};

export default connect(null, { registerProps: register })(SignupSecondStage);
