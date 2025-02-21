import axios from 'axios';
import { User } from '../types/User';

const API_URL = process.env.REACT_APP_API_URL

const login = async (email: string, password: string): Promise<User|undefined> => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (res && res.status === 200) {
      return res.data.data.user as User;
    }
    return undefined;
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export { login };

