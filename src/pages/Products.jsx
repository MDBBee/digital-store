import { useLoaderData } from 'react-router-dom';
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

export const loader = async ({ request }) => {
  const urlParams = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const res = await customFetch('/products', { params: urlParams });
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
