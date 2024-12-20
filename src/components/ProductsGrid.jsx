import { useLoaderData, Link } from 'react-router-dom';
import { formattedPrice } from '../utils';

function ProductsGrid() {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card bg-base-100 w-full shadow-xl hover:shadow-2xl hover:-translate-y-2 duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{formattedPrice(price)}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
