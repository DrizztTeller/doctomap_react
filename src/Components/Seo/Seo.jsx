import { Helmet } from "react-helmet";
import favIcon from "/images/logo.svg";
import { useLocation } from "react-router-dom";


const Seo = () => {
  const location = useLocation();
  const path = location.pathname;
  let metaPageTitle = '';
  let metaPageDescription = "";
  let metaPageOgDescription = "";
  let metakeywords = "";
  switch (path) {
    case "/":
      metaPageTitle = "Acceuil - Doctomap";
      metaPageDescription = "Bienvenue chez Doctomap, l'appli qui vous permet de trouver les docteurs qui vous entourent.";
      metakeywords = "docteurs, localisation, spécialités, adresse";
      metaPageOgDescription = "Découvrer Doctomap, l'appli qui vous facilite la recherche de docteurs";
      break;
    case "/mentions-legales":
      metaPageTitle = "Mentions Légales de Doctomap";
      metaPageDescription = "Découvrez les informations légales et réglementaires de Doctomap.";
      metakeywords = "mentions légales, légalité, informations juridiques, Doctomap";
      metaPageOgDescription = "Consultez les mentions légales de Doctomap : informations sur la conformité juridique de notre site.";
      break;
    case "/rgpd":
      metaPageTitle = "Politique RGPD de Doctomap";
      metaPageDescription = "Découvrez notre politique de confidentialité et notre engagement à protéger vos données personnelles conformément au RGPD. Consultez les détails sur la collecte, l'utilisation et la gestion de vos informations.";
      metakeywords = "RGPD, règlement général sur la protection des données, politique de confidentialité, protection des données personnelles, Doctomap";
      metaPageOgDescription = "Chez Doctomap, nous nous engageons à protéger vos données personnelles en respectant les normes du RGPD. Apprenez-en plus sur la gestion et l'utilisation de vos données sur notre site.";
      break;
    case "/cgu":
      metaPageTitle = "Conditions générales d'utilisation de Doctomap";
      metaPageDescription = "Découvrez nos conditions générales d'utilisation";
      metakeywords = "CGU, conditions générales d'utilisation, Doctomap";
      metaPageOgDescription = "Découvrez nos conditions générales d'utilisation";
      break;
  
    case "/erreur404":
      metaPageTitle = "Page non trouvée";
      metaPageDescription = "La page que vous cherchez n'existe plus.";
      metakeywords = "page non trouvée, inexistance";
      metaPageOgDescription = "La page que vous cherchez n'existe plus.";
      break;
  
    default:
      metaPageTitle = "Accueil - Doctomap";
      metaPageDescription = "Bienvenue chez Doctomap, l'appli qui vous permet de trouver les docteurs qui vous entourent.";
      metakeywords = "docteurs, localisation, spécialités, adresse";
      metaPageOgDescription = "Découvrer Doctomap, l'appli qui vous facilite la recherche de docteurs";
      break;
  }

  return (
    <Helmet>
        <html lang="fr" />
        <title>{metaPageTitle}</title>
        <meta name="description" content={metaPageDescription} />
        <meta name="keywords" content={metakeywords} />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        {/* Empêche le zoom automatique sur mobile  */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta property="og:title" content={metaPageTitle} />
        <meta property="og:description" content={metaPageOgDescription} />
        <meta property="og:locale" content="fr_FR"/>
        <meta property="og:url" content="http://localhost:5173/" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="URL_de_l_image" /> */}

        {/* Balise robots pour autoriser l'indexation  */}
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="http://localhost:5173/" />
        <link rel="icon" href={favIcon} type="image/x-icon" />
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </Helmet>
  );
};

export default Seo;