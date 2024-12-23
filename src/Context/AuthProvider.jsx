import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {


  const [user,setUser] = useState(null);

  const auth = getAuth(app);

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
}



  const emailSignUp = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const emailLogin = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = () => {
    return signOut(auth);
}

const updateUserProfile = (updatedData) => {
  return updateProfile(auth.currentUser, updatedData)

}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser)
        const uid = currentUser.uid;
        console.log("User signed in: ", uid);
      } else {
        setUser(null);
        // User is signed out
        console.log("User signed out");
      }
    });

   
  
    // Cleanup function to remove the listener when the component unmounts
    return () => unsubscribe();
  }, []);


  const authInfoObj = {
    user,
    setUser,
    updateUserProfile,
    logout,
    emailLogin,
    emailSignUp,

    googleSignIn,

  }

  return (
    <AuthContext.Provider value={authInfoObj}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;