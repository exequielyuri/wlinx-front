import { useEffect, useState } from 'react';
import { fetchUser } from '../services/api';
import { User } from '../types/User';

const Welcome = () => {
  const [user, setUser] = useState<User|undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const userData: User | undefined = await fetchUser();
      if (userData !== undefined) {
        setUser(userData);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData()
  }, [user]);

  if (loading) {
    return <p>Loading...</p>
  } else {
    return <h1>Welcome {user ? user.name : ''}!</h1>;
  }
};

export default Welcome;
