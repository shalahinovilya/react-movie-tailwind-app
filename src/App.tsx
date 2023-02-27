import React from 'react';
import {BrowserRouter as Browser} from "react-router-dom";
import AppRoutes from "./routes";
import {AuthProvider} from "./contexts/AuthContext";
import {MovieToastProvider} from "./contexts/MovieToastContext";


function App() {
    return (
        <AuthProvider>
            <MovieToastProvider>
                <Browser>
                    <AppRoutes/>
                </Browser>
            </MovieToastProvider>
        </AuthProvider>
    );
}

export default App;
