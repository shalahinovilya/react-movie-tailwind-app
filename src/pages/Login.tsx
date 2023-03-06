import React from 'react';
import NavBar from "../components/NavBar";
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";

const Login = () => {
    return (
        <>
            <NavBar/>
            <div className="w-full h-screen">
                <img
                    className="absolute h-full w-full object-cover"
                    src="/images/auth.jpg"
                    alt="auth.jpg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="fixed w-full z-50">
                        <div className="w-[600px] mx-auto px-20 py-24 bg-black/70 text-white">
                            <h1 className="text-7xl font-bold">Sign In</h1>
                            <LoginForm/>
                            <LoginFooter/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;