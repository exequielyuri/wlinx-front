import { useLocation } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return <h1>Welcome {name}!</h1>;
};

export default Welcome;
