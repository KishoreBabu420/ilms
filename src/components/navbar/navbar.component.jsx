import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { menuItems } from '../../constants';
import Sidebar from '../sidebar/sidebar.component';
import UserIcon from '../userIcon/userIcon.component';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navToggleHandler = () => {
    setNav(!nav);
  };

  return (
    <nav className='max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm'>
      {/* Left side */}
      <div className='flex items-center'>
        <div
          onClick={navToggleHandler}
          className='text-white cursor-pointer dark:text-gray-800 '
        >
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='px-2 text-4xl text-white dark:text-gray-800 sm:text-3xl lg:text-4xl'>
          <span className='text-6xl font-bold'>G</span>mmco
        </h1>
      </div>

      <UserIcon />

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={navToggleHandler}
          size={30}
          className='absolute text-white cursor-pointer right-4 top-4 dark:text-gray-800'
        />
        <h2 className='p-4 text-2xl text-white dark:text-gray-800'>
          <span className='text-4xl font-bold'>G</span>mmco
        </h2>
        <Sidebar menuItems={menuItems} />
      </div>
    </nav>
  );
};

export default Navbar;
