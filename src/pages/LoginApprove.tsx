import React, {useEffect} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import {useAuth} from "../contexts/AuthContext";
import Cookies from "universal-cookie";


const LoginApprove = () => {

    const [searchParams] = useSearchParams()
    const requestToken = searchParams.get('request_token')
    const approved = searchParams.get('approved')
    const {readCookie} = useAuth()
    const navigate = useNavigate()

    const fetchSessionData = async () => {

        if (approved === 'true' && requestToken) {
            try {

                const sessionData = await fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({request_token: requestToken})
                }).then(data => data.json())

                if (sessionData.success) {
                    const cookie = new Cookies()
                    const expires = new Date()
                    expires.setDate(expires.getDate() + 1)

                    cookie.set(
                        'sessionId',
                        `${sessionData.session_id}`,
                        {
                            expires: expires
                        })

                    return readCookie()
                }
            } catch (e) {
                console.error(e)
            }
            finally {
                navigate('/')
            }
        }
    }

    useEffect(() => {
       fetchSessionData()
    }, [])

    return (
        <div className="h-[100vh] flex flex-col">
            <Loader/>
            <Footer/>
        </div>
    )
};

export default LoginApprove;