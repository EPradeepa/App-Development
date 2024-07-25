import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/Aboutus" element={<Aboutus />} />
                <Route path="/Contact" element={<Contact />} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default App;