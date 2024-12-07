import Hero from '../components/Hero';
import { customFetch } from '../utils';
import FeaturedProducts from '../components/FeaturedProducts';

const url = '/products?featured=true';

const landingPageQury = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(landingPageQury);
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
