class AuthApi {
  BASE_URL = 'https://auth.nomoreparties.co';

  constructor() {}

  getResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  register = (email, password) => {
    return fetch(`${this.BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(this.getResponse)
  };

   login = (email, password) => {
    return fetch(`${this.BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(this.getResponse)
    .then((data) => {
      localStorage.setItem('jwt', data.token)
      return data;
    })
  };

   checkToken = (token) => {
    return fetch(`${this.BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(this.getResponse)
  }
}

const auth = new AuthApi();
export default auth;