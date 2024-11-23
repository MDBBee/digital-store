import axios from 'axios';

const BaseUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: BaseUrl,
});

export const formattedPrice = (price) => {
  const amountDollars = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return amountDollars;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, i) => {
    const item = i + 1;
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });
};
