class Api {
  constructor({ baseURL, headers, baseUrlForImage }) {
    this.baseUrl = baseURL;
    this.headers = headers;
    this.baseUrlForImage = baseUrlForImage;
  }

  //Чек дата
  _chechRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  // Дата юзера
  getUser() {
    return fetch(this.baseUrl + '/users/me', {
        headers: this.headers
    })
        .then((res) => {
            return this._chechRes(res);
        })
  }
  // Апдейт юзера
  updateUser(name, email) {
    return fetch(this.baseUrl + '/users/me',
        {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        .then((res) => {
            return this._chechRes(res);
        })
    }
  // обновление токена
  updateToken(token) {
    this.headers.authorization = `Bearer ${token}`
  }
  //Удалить фильм из saved
  deleteMovie(moviesId) {
    return fetch(this.baseUrl + '/movies/' + moviesId, {
        method: 'DELETE',
        headers: this.headers,
    })
        .then((res) => {
            return this._chechRes(res);
        })
  }
  // НАверно через это в saved закидвать
  postMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  )
  {
    return fetch(this.baseUrl + '/movies', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        country: /* movie.country */country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: this.baseUrlForImage + image,
        trailerLink: trailerLink,
        thumbnail: this.baseUrlForImage + thumbnail,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN
      })
    })
    .then((res) => {
        return this._chechRes(res);
    })
  }
  // Получаем фильмы
  getMovies() {
    return fetch(this.baseUrl + '/movies', {
        headers: this.headers
    })
        .then((res) => {
            return this._chechRes(res);
        })
  }
}

const api = new Api({
  baseURL: "http://localhost:3001",
  headers: {
    authorization: '52388433-afce-471a-9922-beec3eda8533',
    "Content-Type": "application/json",
  },
  baseUrlForImage: 'https://api.nomoreparties.co',
});

export default api;