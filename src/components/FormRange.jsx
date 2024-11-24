import { useState } from 'react';
import { formattedPrice } from '../utils';

function FormRange({ name, label, size, price }) {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span className="label-text-alt">{formattedPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-accent ${size}`}
        step={step}
      />
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize font-bold">0</span>
        <span className="label-text-alt font-bold">
          Max: {formattedPrice(maxPrice)}
        </span>
      </label>
    </div>
  );
}
export default FormRange;
