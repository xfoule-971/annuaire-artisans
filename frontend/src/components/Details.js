import RatingStars from "./RatingStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Details = ({ artisan }) => {
  return (
    <div className="card bg-success card-survol text-light" style={{ width: "22rem" }}>
      {artisan.image && (
        <img
          src={`http://localhost:4000/uploads/${artisan.image}`}
          className="card-img-top"
          alt={artisan.nom}
        />
      )}

      <div className="card-body text-center">
        <h5 className="card-title">{artisan.nom}</h5>
        <RatingStars rating={Number(artisan.note)} />

        <p className="specialite"><strong>{artisan.specialite}</strong></p>

        {/* --- VILLE → GOOGLE MAPS --- */}
        {artisan.ville && (
          <p className="details-link d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="details-icon"
              style={{ marginRight: "6px" }}
            />

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                artisan.ville
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="details-text text-decoration-none text-light"
            >
              {artisan.ville}
            </a>
          </p>
        )}

        <p>{artisan.apropos}</p>

        {/* --- SITE WEB --- */}
        {artisan.siteweb && (
          <p className="details-link d-flex justify-content-center align-items-center mt-3">
            <FontAwesomeIcon
              icon={faGlobe}
              className="details-icon"
              style={{ marginRight: "6px" }}
            />

            <a
              href={
                artisan.siteweb.startsWith("http")
                  ? artisan.siteweb
                  : `https://${artisan.siteweb}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="details-text text-decoration-none text-light"
            >
              {artisan.siteweb}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Details;








