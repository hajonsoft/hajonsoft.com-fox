import firebase from 'firebase';
import 'firebase/analytics';
import {firebaseConfig} from '../firebasConfig';

firebase.initializeApp(firebaseConfig);
export const analytics = firebase.analytics();