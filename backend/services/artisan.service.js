const pool = require('../db/db'); // fichier db.js qui exporte le pool mysql2/promise

// Récupérer tous les artisans
const getAllArtisans = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM artisans');
        return rows;
    } catch (err) {
        throw new Error('Erreur lors de la récupération des artisans : ' + err.message);
    }
};

// Récupérer un artisan par nom (insensible à la casse et sans espace)
const getArtisanByNom = async (nom) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM artisans WHERE LOWER(TRIM(nom)) = LOWER(TRIM(?))',
            [nom]
        );
        if (rows.length === 0) throw new Error('Artisan non trouvé');
        return rows[0];
    } catch (err) {
        throw new Error('Erreur lors de la récupération de l’artisan : ' + err.message);
    }
};

module.exports = {
    getAllArtisans,
    getArtisanByNom
};

