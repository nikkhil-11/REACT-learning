<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";

export default function Layout() {
  return (
    <> 
         <Header />
        <Outlet /> 
        <Footer />
     </>
  )}
=======
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
>>>>>>> 553a4241d847908d59a84836e0ef380ec25c02ca
