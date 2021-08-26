import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 150000,
});

// Add access token to every API request
api.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem('token');
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
});

//401 interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location = '/';
    }
    return error;
  },
);

const apiConfig = {
  get(url, callback) {
    const headers = { authorization: localStorage.getItem('token') };
    return api.get(url, { headers: headers }).then((response) => {
      callback(response);
    });
  },
  post(formData, url, callback) {
    const headers = {
      'Content-Type': 'multipart/form-data',
      authorization: localStorage.getItem('token'),
    };
    return api
      .post(url, formData, {
        headers: headers,
      })
      .then((response) => {
        callback(response);
      });
  },
  put(formData, url, callback) {
    const headers = {
      'Content-Type': 'multipart/form-data',
      authorization: localStorage.getItem('token'),
    };

    return api
      .put(url, formData, {
        headers: headers,
      })
      .then((response) => {
        callback(response);
      });
  },
};

export default apiConfig;
