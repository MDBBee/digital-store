import { useSelector } from 'react-redux';
import { formattedPrice } from '../utils';

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SubTotal */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">{formattedPrice(cartTotal)}</span>
        </p>
        {/* Shipping */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">{formattedPrice(shipping)}</span>
        </p>
        {/* Tax */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Tax</span>
          <span className="font-medium">{formattedPrice(tax)}</span>
        </p>
        {/* OrderTotal */}
        <p className="flex justify-between  mt-4 pb-2 text-sm">
          <span>Order Total</span>
          <span className="font-medium">{formattedPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
}
export default CartTotals;
