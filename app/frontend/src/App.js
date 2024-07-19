import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

function App() {
    const [currentUser, setCurrentUser] = useState();
    const [registrationToggle, setRegistrationToggle] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        client.get("/api/user")
            .then(function (res) {
                setCurrentUser(true);
            })
            .catch(function (error) {
                setCurrentUser(false);
            });
    }, []);

    function updateFormBtn() {
        setRegistrationToggle(!registrationToggle);
    }

    function submitRegistration(e) {
        e.preventDefault();
        client.post(
            "/api/register",
            { email, username, password }
        ).then(function (res) {
            client.post(
                "/api/login",
                { email, password }
            ).then(function (res) {
                setCurrentUser(true);
            });
        });
    }

    function submitLogin(e) {
        e.preventDefault();
        client.post(
            "/api/login",
            { email, password }
        ).then(function (res) {
            setCurrentUser(true);
        });
    }

    function submitLogout(e) {
        e.preventDefault();
        client.post(
            "/api/logout",
            { withCredentials: true }
        ).then(function (res) {
            setCurrentUser(false);
        });
    }

    return (
        <Router>
            <NavbarComponent
                isAuthenticated={currentUser}
                onLogout={submitLogout}
                onToggle={updateFormBtn}
            />
            <Routes>
                <Route path="/home" element={currentUser ? <HomePage /> : <LoginPage />} />
                <Route path="/login" element={<LoginPage email={email} password={password} setEmail={setEmail} setPassword={setPassword} submitLogin={submitLogin} />} />
                <Route path="/register" element={<RegisterPage email={email} username={username} password={password} setEmail={setEmail} setUsername={setUsername} setPassword={setPassword} submitRegistration={submitRegistration} />} />
                <Route path="/" element={<RegisterPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
