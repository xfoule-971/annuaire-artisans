const pool = require('../db/db'); // fichier db.js qui exporte le pool mysql2/promise

// Récupérer tous les artisans "top"
const getAllTop = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM artisans WHERE top = 1');
        return rows; // renvoie tous les artisans avec top = 1
    } catch (err) {
        throw new Error('Erreur lors de la récupération des artisans top : ' + err.message);
    }
};

// Récupérer les artisans "top" par catégorie
const getTopByCategorie = async (categorie) => {
    try {
        const [rows] = await pool.query('SELECT * FROM artisans WHERE top = 1 AND categorie = ?', [categorie]);
        if (rows.length === 0) throw new Error('Aucun artisan top trouvé pour cette catégorie');
        return rows;
    } catch (err) {
        throw new Error('Erreur lors de la récupération des artisans top : ' + err.message);
    }
};

module.exports = {
    getAllTop,
    getTopByCategorie
};
