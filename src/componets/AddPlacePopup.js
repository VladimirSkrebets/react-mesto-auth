import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name: title, link: link });
  }

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  React.useEffect(() => {
    if (isOpen) {
      setTitle("");
      setLink("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        id="title-input"
        className="popup__user-name popup__input"
        type="text"
        name="name"
        placeholder="Название"
        required
        value={title}
        onChange={handleChangeTitle}
        minLength="2"
        maxLength="30"
      />
      <span className="title-input-error popup__input-error"></span>
      <input
        id="link-input"
        className="popup__user-work popup__input"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleChangeLink}
      />
      <span className="link-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
