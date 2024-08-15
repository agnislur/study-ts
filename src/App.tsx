import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import component from './components';
import pages from './pages';

import { UserProvider } from './context/UserContext';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <component.component.Navbar />}
      <Routes>
        <Route path="/" element={<pages.page.login />} />
        <Route path="/home" element={<pages.page.home />} />
        <Route path="/about" element={<pages.page.about />} />
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
