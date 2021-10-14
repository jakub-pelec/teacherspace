interface EnqueueSnackbar {
	enqueueSnackbar: (s: string, o: any) => void;
}

interface Credentials {
	email: string;
	password: string;
}

interface PersonalDetails {
	firstName: string;
	lastName: string;
	email: string;
}

interface LoadingCallback {
	disableLoading: (s: boolean) => void;
}

interface RegisterParams extends PersonalDetails, EnqueueSnackbar, LoadingCallback {
	password: string;
}

interface LoginParams extends EnqueueSnackbar, LoadingCallback {
	email: string;
	password: string;
	redirectToDashboard: () => void;
}

interface Response<T> extends ResponseType {
	data: T;
}
