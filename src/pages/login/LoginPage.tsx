import React from 'react';
import { Header } from '../../components/header/header';

const LoginPage: React.FC = () => {
    const handleLogout = () => {
        // lógica para fazer logout
    };

    return (
        <div>
            <Header isAuthenticated={false} onLogout={handleLogout} />
            <h1>Login Page</h1>
            {/* restante do código */}
        </div>
    );
};

export default LoginPage;