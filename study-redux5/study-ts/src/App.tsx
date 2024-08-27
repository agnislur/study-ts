import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import { UserProvider } from './context';

import {Navbar} from './components';
import {  
  //Home,
  About,
  Login,
  RegisterForm,
  ErrorPage,
  Profile,
  Work } from './pages';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/RegisterForm' && location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/errorpage" element={<ErrorPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    {/* <UserProvider> */}
      <App />

    {/* </UserProvider> */}
  </Router>
);

export default AppWrapper;
