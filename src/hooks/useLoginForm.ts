import { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/User';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }

    if (!password) {
      setError('Password is required');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formIsValid = validateForm();
    if (!formIsValid) return;

    const usr: User | undefined = await login(email, password);
    if (usr !== undefined) {
      navigate('/welcome', { state: { name: usr.name } });
    } else {
      setError('Login failed. Please check your credentials.');
    }
  };

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleSubmit,
  };
};
