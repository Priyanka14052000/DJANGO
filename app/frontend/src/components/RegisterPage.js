import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
function RegisterPage({ email, username, password, setEmail, setUsername, setPassword, submitRegistration }) {
    const navigate = useNavigate();

    return (
        <div>
            <RegistrationForm
                email={email}
                username={username}
                password={password}
                setEmail={setEmail}
                setUsername={setUsername}
                setPassword={setPassword}
                onSubmit={submitRegistration}
            />
        </div>
    );
}

export default RegisterPage;
