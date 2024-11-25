import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';
import { ErrorElement } from './components';
import { store } from './store';

// Loaders
import { loader as loaderLanding } from './pages/Landing';
import { loader as loaderSingleProduct } from './pages/SingleProduct';
import { loader as loaderProducts } from './pages/Products';
import { loader as loaderCheckout } from './pages/Checkout';
import { loader as loaderOrders } from './pages/Orders';

// Actions
import { action as actionRegister } from './pages/Register';
import { action as actionLogin } from './pages/Login';
import { action as actionCheckoutForm } from './components/CheckoutForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: loaderLanding,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: loaderProducts,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: loaderSingleProduct,
        errorElement: <ErrorElement />,
      },
      { path: 'about', element: <About /> },
      { path: 'cart', element: <Cart /> },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: loaderCheckout(store),
        action: actionCheckoutForm(store),
      },
      { path: 'orders', element: <Orders />, loader: loaderOrders(store) },
    ],
  },
  { path: '/login', element: <Login />, action: actionLogin(store) },
  { path: '/register', element: <Register />, action: actionRegister },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
