import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useAppDispatch } from '../../store';
import { setCurrentUser } from '../../store/features/user/userSlice';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const users = useSelector((state: RootState) => state.user.users);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Memeriksa apakah pengguna terdaftar
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {

      dispatch(setCurrentUser(user));

      navigate('/home'); // Redirect ke halaman home setelah login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-sky-500 text-white p-2 rounded mt-4 w-full hover:bg-sky-700"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <Link to="/RegisterForm" className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
