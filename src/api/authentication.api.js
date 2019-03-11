import axios from 'axios';

const login = (creds) => {
  console.log('url is', process.env.API_URL);
  axios.post(`${process.env.API_URL}/login`, {
    data: creds,
  });
};

export default login;
