import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addUser } from '../../store/features/user/userSlice';
import { useAppDispatch } from '../../store';
import { User } from '../../store/features/user/userTypes'; 

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [nohp, setNohp] = useState('');
  const [umur, setUmur] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData: User = { 
      id: Date.now(), 
      username, 
      email, 
      nohp, 
      umur, 
      password 
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Mengirimkan data pengguna ke Redux store
    dispatch(addUser(userData));

    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Daftar Akun Baru</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nohp" className="block text-gray-700">No HP</label>
            <input
              id="nohp"
              type="text"
              value={nohp}
              onChange={(e) => setNohp(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="umur" className="block text-gray-700">Umur</label>
            <input
              id="umur"
              type="text" // Ganti dengan "text" jika "umur" bukan tipe data valid untuk input type
              value={umur}
              onChange={(e) => setUmur(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
