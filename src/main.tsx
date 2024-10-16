import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ModalContextProvider } from './components/Context/ModalContext';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ModalContextProvider>
    <RouterProvider router={router} />
  </ModalContextProvider>
);
