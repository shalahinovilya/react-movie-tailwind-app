import React, {FormEvent} from 'react';

const LoginForm = () => {

    const logIn = async (e: FormEvent) => {
        e.preventDefault()
        const requestTokenData = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`).then(data => data.json())
        if (requestTokenData.success) {
            window.open(`https://www.themoviedb.org/authenticate/${requestTokenData.request_token}?redirect_to=http://localhost:3000/approved`,
                '_blank', 'noreferrer');
        }
    }

    return (
        <form className="py-4">
            <input
                className="w-full text-3xl bg-gray-700 p-4 my-5 rounded"
                id="username"
                type="text"
                placeholder="Username"
            />
            <input
                className="w-full text-3xl bg-gray-700 p-4 my-5  rounded"
                id="password"
                type="password"
                placeholder="Password"
            />
            <button
                onClick={(e) => logIn(e)}
                className="w-full bg-red-700 text-3xl py-4 font-bold my-5"
                type="submit"
            >
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;