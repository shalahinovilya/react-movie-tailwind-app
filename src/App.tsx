import React from 'react';
import {BrowserRouter as Browser} from "react-router-dom";
import AppRoutes from "./routes";
import {AuthProvider} from "./contexts/AuthContext";


function App() {
    return (
        <AuthProvider>
            <Browser>
                <AppRoutes/>
            </Browser>
        </AuthProvider>
    );
}

export default App;
