import React from 'react';
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/catalog/Catalog";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginApprove from "./pages/LoginApprove";


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
            <Route path={'/login'} element={<Login/>}></Route>
            <Route path={'/signup'} element={<Signup/>}></Route>
            <Route path={'/approved'} element={<LoginApprove/>}></Route>
        </Routes>
    );
};

export default AppRoutes;