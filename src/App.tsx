import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import component from './components';
import { Home, Login, RegisterForm, ErrorPage, Profile, About } from './pages';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/RegisterForm' && location.pathname !== '/' && <component.component.Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/errorpage" element={<ErrorPage />} />
        <Route path="/profile" element={<Profile />} />
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
