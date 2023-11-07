import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser= async(name,photo,email,password) =>{
    setLoading(true);
    try {
      const userDetails = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userDetails.user;
      await updateProfile(firebaseUser, {
        displayName: name,
        photoURL: photo,
      });
      setUser(firebaseUser);
    } catch (error) {
      console.error(error);
    }
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    console.log('user: ',currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
      unSubscribe();
    }
  },[])


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
         {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;