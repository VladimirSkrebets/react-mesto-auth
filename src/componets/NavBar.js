function NavBar(props) {
  return (
    <nav className="navbar">
      <p className="navbar__email">{props.userEmail}</p>
      <button onClick={props.handleNavBarClose} className="navbar__btn">
        Выйти
      </button>
    </nav>
  );
}

export default NavBar;
