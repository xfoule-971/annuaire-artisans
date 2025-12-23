const pool = require('../db/db'); // fichier db.js qui exporte le pool mysql2/promise

// Récupérer toutes les spécialités uniques
const getAllSpecialites = async () => {
    try {
        const [rows] = await pool.query('SELECT DISTINCT specialite FROM artisans');
        return rows.map(r => r.specialite); // tableau de strings ['plomberie','menuiserie',...]
    } catch (err) {
        throw new Error('Erreur lors de la récupération des spécialités : ' + err.message);
    }
};

// Récupérer tous les artisans d'une spécialité spécifique (insensible à la casse et sans espace)
const getSpecialiteByName = async (nom) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM artisans WHERE LOWER(TRIM(specialite)) = LOWER(TRIM(?))',
            [nom]
        );
        if (rows.length === 0) throw new Error('Aucun artisan trouvé pour cette spécialité');
        return rows; // renvoie un tableau d'objets { id, nom, ville, specialite, ... }
    } catch (err) {
        throw new Error('Erreur lors de la récupération de la spécialité : ' + err.message);
    }
};

module.exports = {
    getAllSpecialites,
    getSpecialiteByName
};


