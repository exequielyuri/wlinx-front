import { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/User';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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

    setLoading(true);
    const usr: User | undefined = await login(email, password);
    setLoading(true);

    if (usr !== undefined) {
      navigate('/welcome', { state: { name: usr.name } });
    } else {
      setError('Login failed');
      setTimeout(() => {
        setError('');
        setLoading(false);
      }, 500)
    }
  };

  return {
    email,
    password,
    error,
    loading,
    setEmail,
    setPassword,
    handleSubmit,
  };
};
