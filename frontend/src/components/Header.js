import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Header = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const terme = searchTerm.trim();
    if (!terme) return;

    try {
      // 1️⃣ Recherche par nom exact ou partiel
      let res = await fetch(
        `http://localhost:4000/api/artisans?search=${encodeURIComponent(terme)}`
      );
      let data = await res.json();

      if (data.length > 0) {
        const artisan = data[0];
        navigate(`/artisans/${artisan.id}`, { state: { artisan } });
        setSearchTerm("");
        return;
      }

      // 2️⃣ Sinon on considère que c'est une spécialité
      res = await fetch(
        `http://localhost:4000/api/specialites/${encodeURIComponent(terme)}`
      );
      data = await res.json();

      if (data.length > 0) {
        navigate(`/specialite/${encodeURIComponent(terme)}`, {
          state: { artisans: data },
        });
        setSearchTerm("");
        return;
      }

      alert("Aucun artisan ni spécialité trouvée avec ce terme !");
    } catch (err) {
      console.error("Erreur recherche :", err);
      alert("Erreur lors de la recherche.");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg p-2 fixed-top navigation bg-primary">
      <div className="container-fluid">
        {/* LOGO → retour accueil + reset recherche */}
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => setSearchTerm("")}
        >
          <div className="bg-light" style={{ width: "9rem" }}>
            <img src={Logo} alt="emblème" style={{ width: "9rem" }} />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {/* Liens de navigation */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {["batiment", "services", "fabrication", "alimentation"].map(
              (cat) => (
                <li className="nav-item mx-3" key={cat}>
                  <NavLink
                    to={`/liste/${cat}`}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "normal",
                      borderBottom: isActive ? "2px solid #fff" : "none",
                    })}
                    className="navigation__link"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* Barre de recherche */}
          <form className="d-flex ms-3" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher un artisan ou une spécialité..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;



