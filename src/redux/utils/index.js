import axios from 'axios';

// Create an Axios instance

const BASE_URL = 'https://jsonplaceholder.typicode.com/'; 
const instance = axios.create({
  baseURL: BASE_URL,  // Replace with your API base URL
  // timeout: 10000,  // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
instance.interceptors.request.use(
  (config) => {
    // Example: Add Authorization token to every request
    const token = localStorage.getItem('token'); // Get token from local storage or other source
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // if (true) {
    //   config.headers.Authorization = `Bearer JHDSGFHJSFG767345JKHGFJGDHJHJ`;
    // }
    return config;
  },
  (error) => {
    // Handle the request error here
    return Promise.reject(error);
  }
);

// Add response interceptor
instance.interceptors.response.use(
  (response) => {
    // You can process the response here before sending it back
    return response;
  },
  (error) => {
    // Handle specific response errors (e.g., token expiration, network issues)
    if (error.response && error.response.status === 401) {
      // Unauthorized error (e.g., token expired)
      console.log('Token expired or unauthorized');
      // You might want to log the user out or refresh the token here
    }
    return Promise.reject(error);
  }
);
const get = async (url, params = {}) => {
  try {
    const response = await instance.get(url, { params });
    return response.data;
  } catch (error) {
    handleAPIError(error);
    throw error;
  }
};

const post = async (url, data = {}) => {
  try {
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    handleAPIError(error);
    throw error;
  }
}
const handleAPIError = (error) => {
  console.error('API Error:', error.message);
};
export { get, post };
// export default api;
