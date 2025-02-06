import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "/images/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="Footer">
      <div className="footer__div-container">
        <div className="footer__div__div-links">
          <Link
            to={"/mentions-legales"}
            className="footer__div__div__a"
            aria-label={`Aller à la page des mentions legales`}
          >
            Mentions Légales
          </Link>
          <Link
            to={"/cgu"}
            className="footer__div__div__a"
            aria-label={`Aller à la page des cgu`}
          >
            CGU
          </Link>
          <Link
            to={"/rgpd"}
            className="footer__div__div__a"
            aria-label={`Aller à la page du RGPD`}
          >
            RGPD
          </Link>
        </div>

        <figure className="footer__div__figure-img">
          <img
            src={Logo}
            alt="Logo Doctomap"
            loading="lazy"
            className="footer__div__figure__logo"
          />
        </figure>

        <div className="footer__div__div-banner"></div>
      </div>
      <p className="footer__p">{`© ${year} - Doctomap - Tous droits réservés`}</p>
    </footer>
  );
};

export default Footer;
