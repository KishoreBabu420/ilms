import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// routes
import { HomePage, Login, Register, Secure } from './routes';
import ForgotPassword from './routes/forgot/forgot.route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'login',
    element: <Login />,
  },

  {
    path: 'register',
    element: <Register />,
  },

  {
    path: 'secure',
    element: <Secure />,
  },

  {
    path: 'forgot-password',
    element: <ForgotPassword />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
