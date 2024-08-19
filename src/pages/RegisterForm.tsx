import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

interface RegisterFormValues {
  username: string;
  email: string;
  nohp: string;
  umur: string;
  password: string;
}

const RegisterForm: React.FC<InjectedFormProps<RegisterFormValues>> = ({ handleSubmit }) => {
  const navigate = useNavigate();

  const onSubmit = (values: RegisterFormValues) => {
    const userData = { ...values, nohp: Number(values.nohp), umur: Number(values.umur) };
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Daftar</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <Field
              id="username"
              name="username"
              component="input"
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <Field
              id="email"
              name="email"
              component="input"
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nohp" className="block text-gray-700">No HP</label>
            <Field
              id="nohp"
              name="nohp"
              component="input"
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="umur" className="block text-gray-700">Umur</label>
            <Field
              id="umur"
              name="umur"
              component="input"
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <Field
              id="password"
              name="password"
              component="input"
              type="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600"
          >
            Daftar
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Sudah punya akun? </span>
          <Link to="/" className="text-blue-500 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default reduxForm<RegisterFormValues>({ form: 'register' })(RegisterForm);
