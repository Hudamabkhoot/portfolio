import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout, { loader as layoutLoader } from './pages/Layout';
import Home, { loader as homeLoader } from './pages/HomePage';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: layoutLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;