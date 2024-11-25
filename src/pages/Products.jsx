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
