import { Dispatch } from 'redux';
import { setUser } from '../redux/userSlice';

interface LoginFormValues {
  username: string;
  password: string;
}

export const onSubmit = (values: LoginFormValues, dispatch: Dispatch, navigate: (path: string) => void) => {
  const storedUserData = localStorage.getItem('userData');

  if (storedUserData) {
    const user = JSON.parse(storedUserData);
    if (user.username === values.username && user.password === values.password) {
      dispatch(setUser({
        username: user.username,
        email: user.email,
        nohp: user.nohp,
        umur: user.umur
      }));
      navigate('/home');
    } else {
      alert('Username atau password salah');
    }
  } else {
    alert('Tidak ada data pengguna terdaftar');
  }
};
