import React from 'react';
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/catalog/Catalog";
import Detail from "./pages/Detail";


interface ProtectedRouteProps {
    redirectPath: string;
    isAllowed: boolean;
    children: any;
}

const ProtectedRoute = ({redirectPath = '/login', isAllowed, children}: ProtectedRouteProps) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath}/>
    }
    return children ? children : (<Outlet/>)
}
const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/:catalog'} element={<Catalog/>}></Route>
            <Route path={'/:cat/:movieId'} element={<Detail/>}></Route>
        </Routes>
    );
};

export default AppRoutes;