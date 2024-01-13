import { useEffect } from 'react';

import { useAdminGlobalContext } from '../../context/admin.context';
import { useNavigate } from 'react-router-dom';

//components
import { Navbar } from '../../components';

const HomePage = () => {
  const { userIsInactive } = useAdminGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsInactive) {
      navigate('/login');
    }
  }, [userIsInactive]);

  return (
    <main>
      <Navbar />
    </main>
  );
};

export default HomePage;
