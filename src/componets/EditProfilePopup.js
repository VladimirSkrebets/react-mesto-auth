import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ onUpdateUser, isOpen, onClose }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: name, about: description });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        id="name-input"
        className="popup__user-name popup__input"
        type="text"
        name="name"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        onChange={handleChangeName}
        value={name}
      />
      <span className="name-input-error popup__input-error"></span>
      <input
        id="work-input"
        className="popup__user-work popup__input"
        type="text"
        name="about"
        placeholder="О себе"
        required
        minLength="2"
        maxLength="200"
        onChange={handleChangeDescription}
        value={description}
      />
      <span className="work-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
