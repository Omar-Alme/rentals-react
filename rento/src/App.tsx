import { BaseLayout, Cart, Checkout, Error, SingleProduct, Products, Landing, Register, Login, About, Orders  } from './pages';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import { loader as landingLoader } from './pages/Landing';
import { loader as productsLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as checkoutLoader } from './pages/Checkout';
import { store } from './store';

// actions
import { action as regiserUser } from './pages/Register';
import { action as loginUser } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm'





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
        errorElement: <ErrorElement />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders', 
        element: <Orders />,
        errorElement: <ErrorElement />
      },
    ],
  },
  {
    path: '/login', 
    element: <Login />, 
    errorElement: <Error />,
    action: loginUser(store),
  },
  {
    path: '/Register', 
    element: <Register />, 
    errorElement: <Error />,
    action: regiserUser,
  },
  
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;