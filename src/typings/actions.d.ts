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

interface PromiseCallback {
	successCallback: () => void;
	errorCallback: () => void;
	finalCallback: () => void;
}
interface RegisterParams extends PersonalDetails, EnqueueSnackbar, PromiseCallback {
	password: string;
}

interface LoginParams extends EnqueueSnackbar, PromiseCallback {
	email: string;
	password: string;
}

interface Response<T> extends ResponseType {
	data: T;
}
