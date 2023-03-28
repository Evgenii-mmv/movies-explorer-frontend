class Movie {
  constructor() {
  }

  _chechRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies')
      .then((res) => {
            return this._chechRes(res);
        })
  }
}

const moviesApi = new Movie

export default moviesApi;