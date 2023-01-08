import React, {useContext, useEffect, useState} from 'react';
import Cookies from "universal-cookie";

interface defaultValueInterface {
    isAuth: boolean;
    signOut: () => void;
    readCookie: () => void;
}

const defaultValue = {
    isAuth: false,
    signOut: () => {},
    readCookie: () => {},
}

const AuthContext = React.createContext<defaultValueInterface>(defaultValue)

export const AuthProvider = ({children}: any) => {

    const cookies = new Cookies()

    const [isAuth, setIsAuth] = useState(false)
    const [loading, setLoading] = useState(false)

    const readCookie = async () => {
        await setLoading(true)
        const sessionId = await cookies.get('sessionId')
        if (sessionId) {
            await setIsAuth(true)
        }
        await setLoading(false)
    }

    const signOut = () => {
        fetch(`https://api.themoviedb.org/3/authentication/session?api_key=${process.env.REACT_APP_API_KEY}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({session_id: cookies.get('sessionId')})
        })
        setIsAuth(false)
        cookies.remove('sessionId')
    }

    useEffect(() => {
        readCookie()
    }, [])

    const value = {
        isAuth,
        signOut,
        readCookie
    }

    if (loading) {
        return <></>
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext)
}