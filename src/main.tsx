import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
const router = createBrowserRouter([
  {
    path: '/mentor-website',
    element: <HomePage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
