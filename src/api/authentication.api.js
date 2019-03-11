import axios from 'axios';

const login = (creds) => {
  console.log('url is', process.env.API_URL);
  axios.post(`${process.env.API_URL}/login`, creds);
};

export default login;
