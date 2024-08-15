import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Login } from './pages';
import { UserProvider } from './context/UserContext';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
);

export default AppWrapper;
