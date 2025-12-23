import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ArtisanCard from "../components/ArtisanCard";

const Specialite = () => {
  const { nom } = useParams();
  const location = useLocation();
  const [artisans, setArtisans] = useState(location.state?.artisans || []);

  useEffect(() => {
    const fetchArtisans = async () => {
      if (artisans.length > 0) return; // si déjà passés via le state du header, on ne refait pas l'appel

      try {
        const res = await fetch(`http://localhost:4000/api/specialites/${encodeURIComponent(nom)}`);
        if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
        const data = await res.json();
        setArtisans(data);
      } catch (err) {
        console.error("Erreur API spécialité:", err);
      }
    };
    fetchArtisans();
  }, [nom, artisans.length]);

  return (
    <>
      <Helmet>
        <title>Annuaire des artisans d'Auvergne</title>
        <meta
          name="description"
          content="Trouvez un artisan local : bâtiment, services, fabrication, alimentation."
        />
      </Helmet>

      <main className="mt-5 pt-5">
        <div className="container my-5 rounded-3 shadow-lg p-3">
          <h1 className="text-center mb-4 text-primary fw-bold">
            Artisans spécialisés : {nom}
          </h1>

          <div className="row justify-content-center my-5">
            {artisans.length > 0 ? (
              artisans.map((artisan) => (
                <div
                  key={artisan.id}
                  className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
                >
                  <Link to={`/artisans/${artisan.id}`} state={{ artisan }}>
                    <ArtisanCard artisan={artisan} />
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center">Aucun artisan trouvé pour cette spécialité.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Specialite;


