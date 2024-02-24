import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom"

import Home from "../Home/Home";
import Headers from "../Header/Headers";
import CheckoutPages from "../Pages/CheckoutPage"
import Login from "../Login/Login"
import { useState } from "react";
import Showheader_footer from "../Showheader_footer";

export default function Routers()
{
    return(
        <BrowserRouter>
            <Showheader_footer>
                <Headers/>
            </Showheader_footer>
            <Routes>
                <Route path="/" element={<Login/>}/>
                {Login && <Route path="/home" element={<Home />} />}
                <Route path="/checkout" element={<CheckoutPages />}/>
            </Routes>
        </BrowserRouter>
    )
}