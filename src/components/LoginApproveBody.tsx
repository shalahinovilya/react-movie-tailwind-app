import React from 'react';
import Loader from "./Loader";

interface LoginApproveBodyProps {
    error: boolean;
    loading: boolean;
}

const LoginApproveBody = ({error, loading} : LoginApproveBodyProps) => {
    return (
        <>
            {loading && <Loader/> ||
                (<div className="flex grow items-center grow text-white text-9xl">
                    <h1 className="w-full text-center text-6xl sm:text-9xl text-white" >
                        {error ? <span>Something went wrong, <a className="font-bold hover:underline" href="/login">try again</a></span> :
                            <span>You have successfully logged in, return to the <a className="font-bold hover:underline" href="/">home page</a></span>}
                    </h1>
                </div>)
            }
        </>
    );
};

export default LoginApproveBody;