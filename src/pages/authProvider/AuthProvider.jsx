import PropTypes from 'prop-types'; 
import { createContext, useEffect } from 'react';
import auth from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth/cordova';

export const AuthContext = createContext(null)

// social auth provider
const Provider = new GoogleAuthProvider();

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
    const googleLogIn = () => {
       return signInWithPopup(auth, Provider)
       .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        setUser(loggedUser);
    })
    .catch(error => {
        console.log('error', error.message)
    })
    }


    
    // Observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    },[])




    const allValues = {
        createUser,
        signInUser,
        googleLogIn
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