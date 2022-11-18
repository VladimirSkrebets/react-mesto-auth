import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
  const userAvatar = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: userAvatar.current.value });
  }

  React.useEffect(() => {
    if (isOpen) {
      userAvatar.current.value = "";
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        id="avatar-link-input"
        className="popup__input popup__user-work"
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        required
        ref={userAvatar}
      />
      <span className="popup__input-error avatar-link-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
