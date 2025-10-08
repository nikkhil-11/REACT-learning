import React from "react";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            
            <Outlet />
            
            <Footer />
        </>
    );
}