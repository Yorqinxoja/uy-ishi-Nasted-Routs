import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './navbar.css';

function App() {
    const [token, setToken] = useState(null);

    return (
        <Router>
            <div className="App">
                <Hero />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    {token && <Route path="/profile" element={<Profile token={token} />} />}
                </Routes>
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;
