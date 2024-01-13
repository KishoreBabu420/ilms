import { Link } from 'react-router-dom';
import { useAdminGlobalContext } from '../../context/admin.context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAdminGlobalContext();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    //Change the user status to active
    login();
    //Push to dashboard page
    navigate('/');
  };

  return (
    <main className='flex items-center justify-center h-screen'>
      <article className='flex flex-col items-center'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Login to your account
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              onSubmit={submitHandler}
            >
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='admin@gmail.com'
                  required=''
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                Don&apos;t have an account? &nbsp;
                <Link
                  className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                  to='/register'
                >
                  Create an account here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Login;
