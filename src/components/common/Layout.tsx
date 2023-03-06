import React from 'react';
import NavBar from "../NavBar";
import Footer from "../Footer";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <NavBar/>
                {children}
            <Footer/>
        </>
    );
};

export default Layout;