import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseUrl:process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJEXTUD,
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const firebaseAuth = firebaseApp.auth();
  export const firebaseDatabase = firebaseApp.database();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const githubProvider = new firebase.auth.GithubAuthProvider();