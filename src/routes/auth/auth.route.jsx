import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <main className='flex items-center justify-center h-screen gap-8 column'>
      <img
        src='https://www.gmmco.in/images/gmmco_logo_right.jpg'
        alt='gmmco logo'
      />

      <Outlet />
    </main>
  );
};

export default Auth;
