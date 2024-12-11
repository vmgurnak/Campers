// const { VITE_API_URL } = import.meta.env;

import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
  baseURL: 'http://localhost:3000/api',

  // baseURL: VITE_API_URL,
});

export const requestCampers = async () => {
  const {
    data: { data },
  } = await instance.get('/campers');

  console.log(data);
  return data;
};

export const requestCamperID = async id => {
  const {
    data: { data },
  } = await instance.get(`/campers/${id}`);

  console.log(data);
  return data;
};
