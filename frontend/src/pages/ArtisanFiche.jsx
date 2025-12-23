import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Details from "../components/Details";

const ArtisanFiche = () => {
  const { id } = useParams();
  const location = useLocation();
  const [artisan, setArtisan] = useState(location.state?.artisan || null);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!artisan && id) {
      const fetchArtisan = async () => {
        try {
          const res = await fetch(`http://localhost:4000/api/artisans/${id}`);
          if (!res.ok) throw new Error("Artisan non trouvé");
          const data = await res.json();
          setArtisan(data);
        } catch (err) {
          console.error(err);
          setStatus("Artisan non trouvé");
        }
      };
      fetchArtisan();
    }
  }, [id, artisan]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!artisan?.id) return;

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          artisanId: artisan.id,
          nom: formData.nom,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("Message envoyé avec succès !");
        setFormData({ nom: "", email: "", subject:"",message: "" });
      } else {
        setStatus(result.error || "Erreur lors de l'envoi.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Erreur lors de l'envoi.");
    }
  };

  if (!artisan) return <p className="text-center mt-4">{status || "Chargement..."}</p>;

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
          <h1 className="text-center mb-5 text-primary fw-bold">{artisan.nom}</h1>

          <div className="row g-1">
            {/* Fiche détaillée */}
            <div className="col-12 col-lg-7 d-flex justify-content-center">
              <Details artisan={artisan} />
            </div>

            {/* Formulaire de contact */}
            <div className="col-12 col-lg-5">
              <div className="card p-4 shadow-sm bg-secondary">
                <h3 className="mb-3 text-center fw-bolder">Contacter l'artisan</h3>
                {status && <p className="text-center text-success fw-bold">{status}</p>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Votre nom</label>
                    <input
                      type="text"
                      name="nom"
                      className="form-control"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Votre email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Votre demande</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ArtisanFiche;


















