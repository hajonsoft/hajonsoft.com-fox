import firebase from "firebase/app";
import "firebase/analytics";
import { firebaseConfig } from "../firebasConfig";

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const analytics = firebase.analytics();