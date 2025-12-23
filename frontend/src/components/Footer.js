import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTrainTram } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faYoutube, faInstagram, faXTwitter, faWhatsapp, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footext align-items-start">
          <div className="col-12 col-md-4 col-lg-3 my-3">
            <div className="footext__vignette">
              <img src={Logo} alt="embleme" className="footext__vignette-logo" />
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 my-3">
            <h3 className="fw-bolder">Lyon</h3>
            <div className="my-4">
              <p className="my-1">101 cours Charlemagne</p>
              <p className="my-1">CS 20033</p>
              <p className="my-1">69269 LYON CEDEX 02</p>
              <p className="my-1">France</p>
              <p className="my-1">Ouvert du lundi au vendredi de 08h15 à 17h</p>

              <p className="my-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faPhone} className="footext__icon" />
                <span className="mx-2">
                  <a href="tel:+33426734000" className="text-light text-decoration-none footer__menu-link">
                    +33 (0)4 26 73 40 00
                  </a>
                </span>
              </p>

              <p>Accueil téléphonique de 08h30 à 17h</p>

              <p className="my-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faTrainTram} className="footext__icon" />
                <span className="mx-2">
                  Trams T1 et T2 - Arrêt Hôtel de Région - Montrochet
                </span>
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 my-3">
            <h3 className="fw-bolder">Clermont-Ferrand</h3>
            <div className="my-4">
              <p className="my-1">59 Boulevard Léon Jouhaux</p>
              <p className="my-1">CS 90 706</p>
              <p className="my-1">63 050 CLERMONT-FERRAND 02</p>
              <p className="my-1">France</p>
              <p className="my-1">Ouvert du lundi au vendredi de 08h15 à 17h</p>

              <p className="my-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faPhone} className="footext__icon" />
                <span className="mx-2">
                  <a href="tel:+33426734000" className="text-light text-decoration-none footer__menu-link">
                    +33 (0)4 26 73 40 00
                  </a>
                </span>
              </p>

              <p>Accueil téléphonique de 08h30 à 17h</p>

              <p className="my-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faTrainTram} className="footext__icon" />
                <span className="mx-2">
                  Tram A - Arrêt Musée d’Art Roger Quilliot
                </span>
              </p>
            </div>
          </div>
        </div>

        <hr className="text-light" />

        <div className="row">
          <ul className="footer__menu">
            <li><Link to="/mentionslegales" className="text-decoration-none footer__menu-link">Mentions légales</Link></li>
            <li><Link to="/donnees" className="text-decoration-none footer__menu-link">Données personnelles</Link></li>
            <li><Link to="/accessibilite" className="text-decoration-none footer__menu-link">Accessibilité : partiellement conforme</Link></li>
            <li><Link to="/presse" className="text-decoration-none footer__menu-link">Presse</Link></li>
            <li><Link to="/marches" className="text-decoration-none footer__menu-link">Marchés publics</Link></li>
            <li><Link to="/region" className="text-decoration-none footer__menu-link">Venir à la Région</Link></li>
            <li><Link to="/contacts" className="text-decoration-none footer__menu-link">Contacts</Link></li>
            <li><Link to="/politique" className="text-decoration-none footer__menu-link">Politique des cookies</Link></li>
            <li><Link to="/gestion" className="text-decoration-none footer__menu-link">Gestion des cookies</Link></li>
          </ul>
        </div>

        <div className="row my-4 p-2">
          <div className="socialnetwork d-flex flex-wrap justify-content-center gap-3">
            <a href="https://www.facebook.com/RegionAuvergneRhoneAlpes" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="socialnetwork__icon" />
            </a>
            <a href="https://www.linkedin.com/company/auvergne-rhone-alpes" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="socialnetwork__icon" />
            </a>
            <a href="https://www.youtube.com/c/regionauvergnerhonealpes" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="socialnetwork__icon" />
            </a>
            <a href="https://www.instagram.com/region_auvergnerhonealpes/#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="socialnetwork__icon" />
            </a>
            <a href="https://x.com/auvergnerhalpes" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="socialnetwork__icon" />
            </a>
            <a href="https://www.whatsapp.com/channel/0029Vb67SCEG3R3jaCrWfY41" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="socialnetwork__icon" />
            </a>
            <a href="https://www.tiktok.com/@regionauvergnerhonealpes" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="socialnetwork__icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

