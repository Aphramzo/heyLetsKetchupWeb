import axios from 'axios';

const login = async creds => axios.post(`${process.env.API_URL}/login`, creds);

export default login;
