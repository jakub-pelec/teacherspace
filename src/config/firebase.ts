import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// eslint-disable-next-line 
const firebaseConfigDev = {
	apiKey: "AIzaSyCDLbozeo3JH-hY4idncBm9_-NGG4slT3A",
	authDomain: "teacherspace-dev.firebaseapp.com",
	projectId: "teacherspace-dev",
	storageBucket: "teacherspace-dev.appspot.com",
	messagingSenderId: "16829175776",
	appId: "1:16829175776:web:fda4d6e2657b2630953d85",
	measurementId: "G-WKFH50K9T4",
};

const firebaseConfig = {
	apiKey: "AIzaSyDOWwCNyItoV-nm3X2q6NkvWYX4XlvOasA",
	authDomain: "teacherspace-57d5c.firebaseapp.com",
	projectId: "teacherspace-57d5c",
	storageBucket: "teacherspace-57d5c.appspot.com",
	messagingSenderId: "937725526803",
	appId: "1:937725526803:web:b1f9eadd9581dc117d10e6",
	measurementId: "G-YZML4F5BB1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const apiPathDev = "https://us-central1-teacherspace-dev.cloudfunctions.net/api/v1";
export const apiPath = "https://us-central1-teacherspace-57d5c.cloudfunctions.net/api/v1";
export const apiRoutes = {
	createAccount: "/create_account",
};
