import './Error404.css';
import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <article id="Error404">
    <h1 className="bold">404</h1>
    <h2>Oops, la page que vous chercher n'existe plus.</h2>
    <Link to="/">Retourner à la page d'acceuil</Link>
  </article>
  );
};

export default Error404;