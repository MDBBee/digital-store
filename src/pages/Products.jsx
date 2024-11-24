import { useLoaderData } from 'react-router-dom';
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

export const loader = async () => {
  const res = await customFetch('/products');
  const data = res.data.data;
  const meta = res.data.meta;
  return { products: data, meta };
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
