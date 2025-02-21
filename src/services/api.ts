import axios from 'axios';
import { User } from '../types/User';

const API_URL = process.env.REACT_APP_API_URL

const login = async (email: string, password: string): Promise<User|undefined> => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (res && res.status === 200) {
      localStorage.setItem('authToken', res.data.data.token);
      return res.data.data.user as User;
    }
    return undefined;
  } catch (err) {
    console.error('Login failed:', err);
  }
};

const fetchUser = async (): Promise<User|undefined> => {
  const token = localStorage.getItem('authToken');
  if (!token) return undefined;

  try {
    const res = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res && res.status === 200) {
      return res.data.data as User;
    }
    return undefined;
  } catch (err) {
    console.error('Failed in fetching user', err);
  }
};

export { login, fetchUser };

