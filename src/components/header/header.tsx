import React from 'react';
import { Link } from 'react-router-dom';

interface IHeaderProps {
    isAuthenticated: boolean;
    onLogout: () => void;
}

export const Header: React.FC<IHeaderProps> = ({ isAuthenticated, onLogout }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/tasks">Tarefas</Link>
                            </li>
                            <li>
                                <button onClick={onLogout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

