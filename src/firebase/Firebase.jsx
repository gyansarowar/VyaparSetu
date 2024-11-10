import { initializeApp } from "firebase/app";
import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  where,
  addDoc,
  query,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDocRef, setUserDocRef] = useState(null);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const savedUserDocRef = sessionStorage.getItem("userDocRef");
    if (savedUserDocRef) {
      setUserDocRef(JSON.parse(savedUserDocRef));
    }
  }, []);

  useEffect(() => {
    if (userDocRef !== null) {
      sessionStorage.setItem("userDocRef", JSON.stringify(userDocRef));
    }
  }, [userDocRef]);



  const signInWithGoogle = async (userTypeData) => {
    setUserType(userTypeData);
    const result = await signInWithPopup(auth, googleProvider);
    const userData=result.user;
    await handleUser(userData);
    console.log(userData);
    
    toast.success(`Welcome ${result.user.displayName}!`);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await handleUser(currentUser);
      } else {
        setUser(null);
        setUserDocRef(null);
        sessionStorage.removeItem("userDocRef");
      }
    });

    return () => unsubscribe();
  }, []);

  const isLoggedIn = user !== null;
  const Logout = () => signOut(auth);

  const handleUserDocRef = (docRef) => setUserDocRef(docRef);

  const handleUser = async (userData) => {
    const collectionRef = collection(database, "users");
    const q = query(collectionRef, where("email", "==", userData.email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      // console.log(userType);
      
      const docRef = await addDoc(collectionRef, {
        email: userData.email,
        userType,
        // photoURL: userData.photoURL,
        userID: userData.uid,
        userName: userData.displayName,
      });
      handleUserDocRef(docRef.id);
    } else {
      const docSnapShot = querySnapshot.docs[0];
      handleUserDocRef(docSnapShot.id);
    }
    setUser(userData);
  };
  const fetchExporters = async () => {
    const collectionRef = collection(database, "users");
    const q = query(collectionRef, where("userType", "==", "EXPORTER"));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  };

  return (
    <FirebaseContext.Provider
      value={{
        auth,
        user,
        Logout,
        isLoggedIn,
        signInWithGoogle,
        fetchExporters,
      }}
    >
      {" "}
      {children}{" "}
    </FirebaseContext.Provider>
  );
};
