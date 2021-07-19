import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseUrl:process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJEXTUD,
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp;