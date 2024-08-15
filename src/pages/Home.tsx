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
          <p className="text-lg">Your email: {user.email}</p>
          <p className="text-lg">Your Username: {user.username}</p>

        </div>
      ) : (
        <p className="text-lg">You need to log in to see this content.</p>
      )}
    </div>
  );
};

export default Home;
