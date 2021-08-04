import axios from 'axios';

export function post(object, url, callback) {
  const headers = {
    'Content-Type': 'multipart/form-data',
    authorization: localStorage.getItem('token'),
  };

  return axios
    .post(`${process.env.REACT_APP_API_BASE_URL}` + url, object, {
      headers: headers,
    })
    .then((response) => {
      callback(response);
    });
}
