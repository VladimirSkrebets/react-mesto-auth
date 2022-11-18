import React from "react";

function ImagePopup({ onClose, card }) {
  return (
    <div className={`popup popup-place ${card.link ? "popup_opened" : ""}`}>
      <figure className="popup__figure">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <figcaption className="popup__caption">{card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
