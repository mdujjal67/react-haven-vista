import PropTypes from 'prop-types'; 
import { createContext, useEffect } from 'react';
import auth from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null)

// social auth provider

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    console.log(user)

    // create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // sign-in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
       return signInWithPopup(auth, googleProvider)
    }


    
    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
          return () => {
            return unSubscribe;
          }
    },[])

    // logout
    const logOut = () => {
        signOut(auth)
    }


    const allValues = {
        createUser,
        signInUser,
        user,
        googleLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object
};
export default AuthProvider;