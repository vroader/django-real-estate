import React from "react";
import { BrouseRouter as  Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";

const App = () => {
    return (
        <>
            <Header />
            <main className="py-3">
                <h1>Welcome to the Real Estate</h1>
                <Routes>
                    <Route path="/" element={<HomePage/>} ></Route> 
                </Routes>
                <Routes>
                    <Route path="/properties" element={<PropertiesPage/>}>
                    </Route>
                </Routes>
            </main>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default App;