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

interface SignupData extends PersonalDetails {
	password: string
}

interface PromiseCallback {
	successCallback: () => void;
	errorCallback: () => void;
	finalCallback: () => void;
}
interface RegisterParams extends PromiseCallback {
	classes: Class[],
	subjects: Subject[]
}

interface LoginParams extends EnqueueSnackbar, PromiseCallback {
	email: string;
	password: string;
}

interface Response<T> extends ResponseType {
	data: T;
}

interface Subject {
	value: string,
	label: string
}

interface Class {
	value: string,
	label: string
}

interface Option {
	label: string;
	value: string;
	__isNew__?: boolean
}

interface Note {
	content: string;
	title: string;
	classes: Class[];
	subjects: Subject[];
}

interface UserData {
	firstName: string;
	lastName: string;
	email: string;
	classes: Class[];
	subjects: Subject[];
}

type Merge<A, B> = ({ [K in keyof A]: K extends keyof B ? B[K] : A[K] } &
	B) extends infer O
	? { [K in keyof O]: O[K] }
	: never;

interface FirestoreID {
	id: string
}