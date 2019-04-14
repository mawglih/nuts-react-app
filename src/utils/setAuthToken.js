import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('axios defaults applied: ', axios.defaults.headers.common);
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;