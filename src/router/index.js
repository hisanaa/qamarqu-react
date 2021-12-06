import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Home from '../pages/home'
import DetailHotel from '../pages/hotel'
import Checkout from '../pages/hotel/checkout';
import Booking from '../pages/booking'

export function About () {
    return (
        <div>about</div>
    )
}

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/hotel" element={<DetailHotel />} >
                <Route path=":slug" element={<DetailHotel />} />
            </Route>
            <Route path="/hotel/checkout" element={<Checkout />} >
                <Route path=":slug" element={<Checkout />} />
            </Route>
        </Routes>
    )
}

export default Router
