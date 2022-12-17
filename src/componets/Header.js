import { useState } from "react";
import { useLocation } from "react-router";
import { Link, Route } from "react-router-dom";
import logoHeader from "../images/logo.svg";
import NavBar from "./NavBar";

function Header(props) {
  const location = useLocation();
  const [navBarOpen, setNavBarOpen] = useState(false);

  function handleNavBarClose() {
    setNavBarOpen(false);
    props.signOut();
  }

  function renderNavBar() {
    return (
      <>
        {location.pathname === "/" && (
          <NavBar
            handleNavBarClose={handleNavBarClose}
            userEmail={props.userEmail}
          />
        )}
        <Route path="/signup">
          <Link className="header__link" to="/signin">
            Войти
          </Link>
        </Route>
        <Route path="/signin">
          <Link className="header__link" to="/signup">
            Регистрация
          </Link>
        </Route>
      </>
    );
  }

  return (
    <>
      {navBarOpen && (
        <NavBar
          handleNavBarClose={handleNavBarClose}
          userEmail={props.userEmail}
        />
      )}
      <header className="header">
        <img className="header__logo" src={logoHeader} alt="Логотип Mesto" />
        {location.pathname === "/"}
        {renderNavBar()}
      </header>
    </>
  );
}

export default Header;
