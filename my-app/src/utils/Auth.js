class Auth {
  constructor({ baseURL, headers }) {
    this.url = baseURL;
    this._headers = headers;
  }

  //Чек дата
  _chechRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  //логин
  setAuthorizeUser( email, password ) {
    return fetch(`${this.url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return this._chechRes(res);
      })
      .then((data) => {
        console.log('set auth:, ', data);
        if (data.token) {
          localStorage.setItem("jwt", data.token);
        }
        return data;
      });
  }
  //Регистрация
  setRegisterUser( name, email, password ) {
    return fetch(`${this.url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then((res) => {
      return this._chechRes(res);
    });
  }

}


const auth = new Auth({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },

});

export default auth;