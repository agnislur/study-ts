import React from 'react';
import { useUser } from '../context/UserContext';

const Home: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      {user ? (
        <div>
          <p className="text-lg">Welcome, {user.username}!</p>
          <p className="text-lg">email: {user.email}</p>
          <p className="text-lg">Username: {user.username}</p>
          <p className='text-lg'>No Handphone: {user.nohp}</p>
          <p className='text-lg'>Umur: {user.umur}</p>
        </div>
      ) : (
        <p className="text-lg">You need to log in to see this content.</p>
      )}
    </div>
  );
};

export default Home;
