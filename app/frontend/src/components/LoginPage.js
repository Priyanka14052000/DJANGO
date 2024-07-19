import React from 'react';
import LoginForm from './LoginForm';

function LoginPage({ email, password, setEmail, setPassword, submitLogin }) {
    return (
        <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onSubmit={submitLogin}
        />
    );
}

export default LoginPage;
