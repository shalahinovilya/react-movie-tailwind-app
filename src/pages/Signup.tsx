import React from 'react';
import NavBar from "../components/NavBar";
import {Link} from "react-router-dom";
import Layout from "../components/common/Layout";

const Signup = () => {
    return (
        <Layout>
            <div className="w-full h-screen">
                <img
                    className="absolute h-full w-full object-cover"
                    src="/images/auth.jpg"
                    alt="auth.jpg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
                <div className="fixed w-full my-24 z-50">
                    <div className="w-[600px] h-[800px] mx-auto px-20 py-24 bg-black/70 text-white">
                        <h1 className="text-7xl font-bold">Sign Up</h1>
                        <form className="py-4">
                            <input
                                className="w-full text-3xl bg-gray-700 p-4 my-5 rounded"
                                id="username"
                                type="text"
                                placeholder="Username"
                            />
                            <input
                                className="w-full text-3xl bg-gray-700 p-4 my-5 rounded"
                                id="password"
                                type="password"
                                placeholder="Password"
                            />
                            <button className="w-full bg-red-700 text-3xl py-4 font-bold my-5" type="submit">Sign Up</button>
                        </form>
                        <div className="flex justify-between items-center text-gray-500 text-2xl">
                            <p>
                                <input className="mr-2 w-5 h-5" type="checkbox" />
                                Remember me
                            </p>
                            <Link to="#" className="hover:underline">Need help?</Link>
                        </div>
                        <div className="text-2xl text-gray-500 mt-4">
                            <span>Already subscribed to Netflix?</span>
                            <Link className="ml-2 text-white" to={`/login`}>Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;