import { BaseLayout, Cart, Checkout, Error, SingleProduct, Products, Landing, Register, Login, About, Orders  } from './pages';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, 
        element: <Landing />
      },
      {
        path: 'about', 
        element: <About />
      },
      {
        path: 'products', 
        element: <Products />
      },
      {
        path: 'products/:id', 
        element: <SingleProduct />
      },
      {
        path: 'cart', 
        element: <Cart />
      },
      {
        path: 'checkout', 
        element: <Checkout />
      },
      {
        path: 'orders', 
        element: <Orders />
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