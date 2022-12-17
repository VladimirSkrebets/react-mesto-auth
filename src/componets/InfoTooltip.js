import successIcon from "../images/success-icon.svg";
import mistakeIcon from "../images/mistake-icon.svg";

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__result-img"
          src={props.tooltipStatus ? successIcon : mistakeIcon}
          alt="Результат авторизации"
        />
        <p className="popup__result-title">
          {props.tooltipStatus
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
