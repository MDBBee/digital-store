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
