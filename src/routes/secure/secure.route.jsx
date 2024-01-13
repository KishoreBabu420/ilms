import { useEffect } from 'react';

import { useAdminGlobalContext } from '../../context/admin.context';
import { useNavigate } from 'react-router-dom';

const Secure = () => {
  const { userIsInactive } = useAdminGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsInactive) {
      navigate('/login');
    }
  }, [userIsInactive]);

  return (
    <main className='flex items-center justify-center h-screen'>
      <article className='flex flex-col items-center'>
        <div className='bg-white rounded-lg shadow min-w-36 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Secure your account
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              method='POST'
            >
              <div>
                <label
                  htmlFor='auth-code'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Enter Email OTP
                </label>
                <input
                  type='password'
                  name='auth-code'
                  id='auth-code'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='**********'
                  required=''
                />
              </div>

              <button
                type='submit'
                className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Login
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400 min-w-[24rem] text-center'>
                Complete 2FA to Secure your account
              </p>
            </form>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Secure;
