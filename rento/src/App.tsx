import { BaseLayout, Cart, Checkout, Error, SingleProduct, Products, Landing, Register, Login, About, Orders  } from './pages';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';


import { loader as landingLoader } from './pages/Landing';
import { loader as productsLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';


const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, 
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'about', 
        element: <About />,
        errorElement: <ErrorElement />
      },
      {
        path: 'products', 
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: 'products/:id', 
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: 'cart', 
        element: <Cart />,
        errorElement: <ErrorElement />
      },
      {
        path: 'checkout', 
        element: <Checkout />,
        errorElement: <ErrorElement />
      },
      {
        path: 'orders', 
        element: <Orders />,
        errorElement: <ErrorElement />
      },
    ],
  },
  {path: '/login', element: <Login />, errorElement: <Error />},
  {path: '/Register', element: <Register />, errorElement: <Error />},
  
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;