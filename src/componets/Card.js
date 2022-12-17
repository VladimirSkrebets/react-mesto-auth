import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `${
    isOwn ? "cards__trash" : "cards__trash_hidden"
  }`;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `cards__icon-like ${
    isLiked ? "cards__icon-like_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="cards__item">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="cards__picture"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="cards__wrapper">
        <h2 className="cards__title">{props.card.name}</h2>
        <div className="cards__like">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="cards__like-number">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
