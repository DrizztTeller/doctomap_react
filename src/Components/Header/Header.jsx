import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import logo from "/images/logo.svg"; // Assurez-vous que le chemin est correct

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);

  useEffect(() => {
    const nav = document.querySelector("#navMenu");

    if (open) {
      const handleClose = () => toggleMenu();
      nav.addEventListener("click", handleClose);
      window.addEventListener("scroll", handleClose);

      return () => {
        nav.removeEventListener("click", handleClose);
        window.removeEventListener("scroll", handleClose);
      };
    }
  }, [open]);

  return (
    <header id="Header">
      <NavLink
        to="/"
        className="header__a"
        aria-label={`Aller en haut de la page Home`}
      >
        <figure className="header__a__figure-img">
          <img
            src={logo}
            alt="Doctomap Logo"
            className="header__a__figure__logo"
          />
        </figure>
        <span>Doctomap</span>
      </NavLink>

      <button
        className="header__btn-burger"
        onClick={toggleMenu}
        aria-expanded={open}
        aria-label={"Ouvrir menu de navigation"}
        aria-controls="navMenu"
      >
        <div
          className={`header__btn-burger__div-burger ${open && "menu__open"}`}
        ></div>
      </button>

      <nav id="navMenu" className={`header__nav bold ${open ? "visible" : ""}`}>
        <ul className="header__nav__ul">
          <li className="header__nav__ul__li">
            <NavLink
              to="/rechercher"
              aria-current={path === "/rechercher" ? "true" : undefined}
              aria-label={`Aller à la page pour rechercher un docteur`}
              className={
                "header__nav__ul__li__a " + (path === "/rechercher" && "active")
              }
            >
              Rechercher
            </NavLink>
          </li>
          <li className="header__nav__ul__li">
            <NavLink
              to="/ajouter"
              aria-current={path === "/ajouter" ? "true" : undefined}
              aria-label={`Aller à la page pour ajouter un docteur`}
              className={
                "header__nav__ul__li__a " + (path === "/ajouter" && "active")
              }
            >
              Ajouter
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header__div-scroll"></div>
    </header>
  );
}

export default Header;
