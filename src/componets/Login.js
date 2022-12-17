import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleLogin(email, password);
  }

  return (
    <div className="form">
      <form className="form__container" onSubmit={handleSubmit}>
        <h2 className="form__title">Вход</h2>

        <input
          className="form__input form__input_text_email"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          minLength="1"
          maxLength="30"
          required
          value={email || ""}
          onChange={handleChangeEmail}
        />
        <span className="form__error" id="email-error"></span>

        <input
          className="form__input form__input_text_password"
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          minLength="5"
          maxLength="15"
          required
          value={password || ""}
          onChange={handleChangePassword}
        />
        <span className="form__error" id="password-error"></span>

        <button className="form__btn" type="submit" onSubmit={handleSubmit}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
