import ProductsGrid from './ProductsGrid';
import SectionTiltle from './SectionTitle';

function FeaturedProducts() {
  return (
    <div className="pt-24">
      <SectionTiltle text="featured products" />
      <ProductsGrid />
    </div>
  );
}
export default FeaturedProducts;
