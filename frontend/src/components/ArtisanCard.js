import RatingStars from "./RatingStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ArtisanCard = ({ artisan }) => {
  return (
    <div className="card bg-success text-light h-100 shadow-sm">
      {artisan.image && (
        <img
          src={`http://localhost:4000/uploads/${artisan.image}`}
          className="card-img-top img-fluid"
          alt={artisan.nom}
        />
      )}

      <div className="card-body text-center d-flex flex-column">
        <h5 className="card-title text-truncate">{artisan.nom}</h5>

        <RatingStars rating={Number(artisan.note)} />

        <p className="fw-bold text-break mb-2">
          {artisan.specialite}
        </p>

        <p className="d-flex justify-content-center align-items-center mt-auto mb-0">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="ms-2">{artisan.ville}</span>
        </p>
      </div>
    </div>
  );
};

export default ArtisanCard;
