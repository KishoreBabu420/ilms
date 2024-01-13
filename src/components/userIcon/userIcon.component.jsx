import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAdminGlobalContext } from '../../context/admin.context';

const UserIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useAdminGlobalContext();

  const logoutHandler = (e) => {
    logout();
  };

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='relative inline-block '>
      {/* Dropdown toggle button  */}
      <button
        className='relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none'
        onClick={toggleHandler}
      >
        <span className='mx-1'>Jane Doe</span>
        <svg
          className='w-5 h-5 mx-1'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z'
            fill='currentColor'
          ></path>
        </svg>
      </button>
      {/* Dropdown menu */}

      <div
        onClick={toggleHandler}
        className={
          isOpen
            ? 'absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 ease-out duration-100 opacity-100 scale-100'
            : 'absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 ease-out duration-100 opacity-0 scale-90'
        }
      >
        <a
          href='#'
          className='flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          <img
            className='flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9'
            src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='jane avatar'
          />
          <div className='mx-1'>
            <h1 className='text-sm font-semibold text-gray-700 dark:text-gray-200'>
              Jane Doe
            </h1>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              janedoe@exampl.com
            </p>
          </div>
        </a>

        <hr className='border-gray-200 dark:border-gray-700 ' />

        <Link
          to='#'
          className='block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          view profile
        </Link>

        <hr className='border-gray-200 dark:border-gray-700 ' />

        <Link
          to='#'
          className='block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Company profile
        </Link>

        <Link
          to='#'
          className='block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Team
        </Link>

        <hr className='border-gray-200 dark:border-gray-700 ' />

        <Link
          to='#'
          className='block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Help
        </Link>
        <button
          onClick={logoutHandler}
          className='block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserIcon;
