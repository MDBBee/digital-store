import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
        loader: loaderLanding(queryClient),
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: loaderProducts(queryClient),
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: loaderSingleProduct(queryClient),
        errorElement: <ErrorElement />,
      },
      { path: 'about', element: <About /> },
      { path: 'cart', element: <Cart /> },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: loaderCheckout(store),
        action: actionCheckoutForm(store, queryClient),
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: loaderOrders(store, queryClient),
      },
    ],
  },
  { path: '/login', element: <Login />, action: actionLogin(store) },
  { path: '/register', element: <Register />, action: actionRegister },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
