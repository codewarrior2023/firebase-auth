import { createContext, useContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged, 
} from 'firebase/auth';
import { auth } from '../firebase';

// here we create a context called UserContext

const UserContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    // here we manage our signin, logout, and createUser functions

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth)
    }

    // here we manage our authentication state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // here we wrap the children and pass all the states that we want to access

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn }}>
            {children}
        </UserContext.Provider>
    )
}

// gives us access to the state values that we want to access

export const UserAuth = () => {
    return useContext(UserContext);
}