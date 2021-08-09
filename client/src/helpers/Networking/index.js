import axios from 'axios';

export function get(url, callback) {
  const headers = { authorization: localStorage.getItem('token') };

  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}${url}`, { headers: headers })
    .then((response) => {
      callback(response);
    });
}

export function post(formData, url, callback) {
  const headers = {
    // 'Content-Type': 'multipart/form-data',
    authorization: localStorage.getItem('token'),
  };

  return axios
    .post(`${process.env.REACT_APP_API_BASE_URL}${url}`, formData, {
      headers: headers,
    })
    .then((response) => {
      callback(response);
    });
}
