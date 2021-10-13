interface EnqueueSnackbar {
    enqueueSnackbar: (s: string, o: any) => void
}

interface Credentials {
    email: string,
    password: string
}

interface PersonalDetails {
    firstName: string,
    lastName: string,
    email: string
}

interface RegisterParams extends PersonalDetails, EnqueueSnackbar {
    password: string
}

interface LoginParams extends EnqueueSnackbar {
    email: string,
    password: string
}