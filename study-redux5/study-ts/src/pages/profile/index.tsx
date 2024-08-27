import React, { useEffect, useState } from 'react';
// import {  useSelector } from 'react-redux';
import { 
  RootState,
  useAppDispatch,
  useAppSelector
} from '../../store/store';

import { 
  fetchUser,
  saveUser
} from '../../store/features/user/userThunk';

import { User } from '../../store/features/user/userTypes'

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.users[0]); // Mengambil data pengguna dari state
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<User>({
    id: user?.id || 0, 
    username: user?.username || '',
    email: user?.email || '',
    nohp: user?.nohp || '',
    umur: user?.umur || '',
    password: '' 
  });
  
  useEffect(() => {
    (fetchUser());
  }, [dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(saveUser(formData));
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-6 bg-white-100 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">User Profile</h1>
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          {!isEditing ? (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">Welcome, {formData.username}!</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Username:</p>
                  <p className="text-xl font-medium text-gray-800">{formData.username}</p>
                </div>
                <div>
                  <p className="text-gray-600">Email:</p>
                  <p className="text-xl font-medium text-gray-800">{formData.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">No Handphone:</p>
                  <p className="text-xl font-medium text-gray-800">{formData.nohp}</p>
                </div>
                <div>
                  <p className="text-gray-600">Umur:</p>
                  <p className="text-xl font-medium text-gray-800">{formData.umur}</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">Username:</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">No Handphone:</label>
                  <input
                    type="number"
                    name="nohp"
                    value={formData.nohp}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Umur:</label>
                  <input
                    type="number"
                    name="umur"
                    value={formData.umur}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <p className="text-lg text-center text-gray-700">You need to log in to see this content.</p>
      )}
    </div>
  );
};

export default Profile;
