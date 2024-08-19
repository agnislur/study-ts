import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { onSubmit } from '../utils/loginUtils'; // Import fungsi utilitas

interface LoginFormValues {
  username: string;
  password: string;
}

// Komponen LoginForm
const Login: React.FC<InjectedFormProps<LoginFormValues>> = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit(values => onSubmit(values, dispatch, navigate))}>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <Field
              name="username"
              component="input"
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <Field
              name="password"
              component="input"
              type="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-sky-500 text-white p-2 rounded mt-4 w-full hover:bg-sky-700">
            <h1 className="text-center">Login</h1>
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Belum punya akun? </span>
          <Link to="/RegisterForm" className="text-blue-500 hover:underline">Daftar</Link>
        </div>
      </div>
    </div>
  );
};

export default reduxForm<LoginFormValues>({ form: 'login' })(Login);
