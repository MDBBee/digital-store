import { useLoaderData } from 'react-router-dom';
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const allProductsQry = (urlParams) => {
  const { search, category, company, sort, price, shipping, page } = urlParams;

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch('/products', { params: urlParams }),
  };
};
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const urlParams = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const res = await queryClient.ensureQueryData(allProductsQry(urlParams));
    const data = res.data.data;
    const meta = res.data.meta;

    return { products: data, meta, urlParams };
  };

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
export default Products;

// 1st stage before filter
// const url = '/products';
// export const loader = async () => {
//   const response = await customFetch(url);

//   const products = response.data.data;
//   const meta = response.data.meta;
//   return { products, meta };
// };

// 2nd stage after filter
// export const loader = async ({ request }) => {
//   const params = Object.fromEntries([
//     ...new URL(request.url).searchParams.entries(),
//   ]);
//   const response = await customFetch(url, { params });

//   const products = response.data.data;
//   const meta = response.data.meta;

//   return { products, meta, params };
// };
