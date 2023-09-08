import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyA7Iv2wssnjrU_SUNLTF7HwP5RkZB4bUxM",
  authDomain: "new-class-auk.firebaseapp.com",
  projectId: "new-class-auk",
  storageBucket: "new-class-auk.appspot.com",
  messagingSenderId: "811776585850",
  appId: "1:811776585850:web:cfadade5f1b07e78ca8bc3",
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage };

export default db;