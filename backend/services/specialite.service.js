const pool = require('../db/db'); // fichier db.js qui exporte le pool mysql2/promise

// Récupérer toutes les spécialités uniques
const getAllSpecialites = async () => {
    try {
        const [rows] = await pool.query('SELECT DISTINCT specialite FROM artisans');
        return rows; // renvoie un tableau d'objets { specialite: "..." }
    } catch (err) {
        throw new Error('Erreur lors de la récupération des spécialités : ' + err.message);
    }
};

// Récupérer une spécialité spécifique
const getSpecialiteByName = async (nom) => {
    try {
        const [rows] = await pool.query('SELECT DISTINCT specialite FROM artisans WHERE specialite = ?', [nom]);
        if (rows.length === 0) throw new Error('Spécialité non trouvée');
        return rows[0]; // renvoie un objet { specialite: "..." }
    } catch (err) {
        throw new Error('Erreur lors de la récupération de la spécialité : ' + err.message);
    }
};

module.exports = {
    getAllSpecialites,
    getSpecialiteByName
};
