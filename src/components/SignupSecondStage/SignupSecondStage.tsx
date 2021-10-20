import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import FormSelectField from "../../shared/form-components/FormSelectField/FormSelectField";
import { useForm } from "react-hook-form";
import { Button } from "../../shared/components/Button/Button";
import { subjectOptions, classOptions } from "../../constants/options";
import { connect } from "react-redux";
import { register } from "../../actions/actions";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

import { Wrapper, FormField, FormContainer, Title, ContentColumnRight, ContentColumnLeft, Background, Form, Info } from "./Elements";
import { CircularProgress } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

interface IProps extends RouteComponentProps {
	registerProps: any;
}

const SignupSecondStage: React.FC<IProps> = ({ registerProps }) => {
	const { t } = useTranslation();
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
			enqueueSnackbar(t('snackbar.success.register'), { variant: "success" });
			push("/dashboard");
		};
		const errorCallback = () => {
			enqueueSnackbar(t("snackbar.errors.default"), { variant: "error" });
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
						<Title>{t("registerPageSecondStage.title")}</Title>
						<Info>{t("registerPageSecondStage.info")}</Info>
						<Form onSubmit={handleSubmit(submitHandler)}>
							<FormField>
								<FormSelectField
									options={subjectOptions}
									control={control}
									name="subjects"
									errored={errors.subject?.message}
									placeholder={t("registerPageSecondStage.subject")}
								/>
							</FormField>
							<FormField>
								<FormSelectField
									options={classOptions}
									control={control}
									name="classes"
									errored={errors.class?.message}
									placeholder={t("registerPageSecondStage.class")}
								/>
							</FormField>
							<Button type="submit" disabled={loading}>
								{loading ? <CircularProgress size={23} /> : t("registerPageSecondStage.register")}
							</Button>
						</Form>
					</ContentColumnLeft>
				</FormContainer>
			</Wrapper>
		</>
	);
};

export default connect(null, { registerProps: register })(SignupSecondStage);
