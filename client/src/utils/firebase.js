// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
//   authDomain: "taskmanager-557d7.firebaseapp.com",
//   projectId: "taskmanager-557d7",
//   storageBucket: "taskmanager-557d7.appspot.com",
//   messagingSenderId: "824261215224",
//   appId: "1:824261215224:web:ba24631a12b4bf9d5e8c0d",
// };

// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager1-419b5.firebaseapp.com",
  projectId: "taskmanager1-419b5",
  storageBucket: "taskmanager1-419b5.appspot.com",
  messagingSenderId: "518849409876",
  appId: "1:518849409876:web:fc0bd71a2e486bbbd90ec1",
  measurementId: "G-D42EE63BD0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);