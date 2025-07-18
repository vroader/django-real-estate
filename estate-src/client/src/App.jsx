import React from "react";
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PropertiesPage from "./pages/PropertiesPage";
import NotFound from "./components/NotFound";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <main className="py-3">
                    <h1>Welcome to the Real Estate</h1>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>                
                        <Route 
                            path="/properties" 
                            element={<PropertiesPage/>}
                        />
                        <Route path='/login' element={<LoginPage />} />
                        <Route 
                            path="*" 
                            element={<NotFound />} />
                    </Routes>
                    <ToastContainer theme="dark" />
                </main>
                <Footer />
            </Router>
        </>
    );
};

export default App;