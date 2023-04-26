import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/header/header';
import LoginPage from './pages/login/LoginPage';
import TasksPage from './pages/tasks/TasksPage';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Router>
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          {isAuthenticated ? (
            <Route path="/tasks" element={<TasksPage />} />
          ) : (
            <Navigate to="/login" />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;