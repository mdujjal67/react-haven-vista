import PropTypes from 'prop-types'; 
import { createContext, useEffect } from 'react';
import auth from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null)

// social auth provider
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();



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

    // google sign-in
    const googleLogin = () => {
       return signInWithPopup(auth, googleProvider)
    }

    // github sign-in
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
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
        setUser(null)
        signOut(auth)
    }


    const allValues = {
        user,
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
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