import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ArtisanCard from "../components/ArtisanCard";

const Liste = () => {
  const { slug } = useParams();
  const [artisans, setArtisans] = useState([]);

  const routes = {
    batiment: "http://localhost:4000/api/categories/batiment",
    services: "http://localhost:4000/api/categories/services",
    fabrication: "http://localhost:4000/api/categories/fabrication",
    alimentation: "http://localhost:4000/api/categories/alimentation",
  };

  useEffect(() => {
    const url = routes[slug];
    if (!url) {
      setArtisans([]);
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setArtisans(data);
        } else {
          setArtisans([]);
        }
      })
      .catch(() => setArtisans([]));

    return () => setArtisans([]);
  }, [slug]);

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
            Artisans dans la catégorie {slug}
          </h1>

          <div className="row justify-content-center my-5">
            {Array.isArray(artisans) &&
              artisans.map((artisan) => (
                <div
                  key={artisan.id}
                  className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
                >
                  <Link to={`/artisans/${artisan.id}`} state={{ artisan }}>
                    <ArtisanCard artisan={artisan} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Liste;




