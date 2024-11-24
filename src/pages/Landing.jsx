import Hero from '../components/Hero';
import { customFetch } from '../utils';
import FeaturedProducts from '../components/FeaturedProducts';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
export default Landing;
