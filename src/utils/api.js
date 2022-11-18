class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkStatus);
  }

  getDownloadedCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkStatus);
  }

  editUserInfo(description) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: description.name,
        about: description.about,
      }),
    }).then(this._checkStatus);
  }

  addNewCard(description) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: description.name,
        link: description.link,
      }),
    }).then(this._checkStatus);
  }

  editUserAvatar(description) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: description.avatar }),
    }).then(this._checkStatus);
  }

  deleteCard(data) {
    return fetch(`${this._baseUrl}/cards/${data._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkStatus);
  }

  addLike(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: `${isLiked ? "DELETE" : "PUT"}`,
      headers: this._headers,
    }).then(this._checkStatus);
  }

  deleteLike(data) {
    return fetch(`${this._baseUrl}/cards/${data._id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkStatus);
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-47",
  headers: {
    authorization: "b9557719-c9d8-4f14-9deb-953fa591f94c",
    "Content-Type": "application/json",
  },
});

export default api;
