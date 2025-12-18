const pool = require('../db/db'); // fichier db.js qui exporte le pool mysql2/promise

// Récupérer toutes les catégories uniques
const getAllCategories = async () => {
    try {
        const [rows] = await pool.query('SELECT DISTINCT categorie FROM artisans');
        return rows; // renvoie un tableau d'objets { categorie: "..." }
    } catch (err) {
        throw new Error('Erreur lors de la récupération des catégories : ' + err.message);
    }
};

// Récupérer une catégorie spécifique
const getCategoryByName = async (nom) => {
    try {
        const [rows] = await pool.query('SELECT DISTINCT categorie FROM artisans WHERE categorie = ?', [nom]);
        if (rows.length === 0) throw new Error('Catégorie non trouvée');
        return rows[0]; // renvoie un objet { categorie: "..." }
    } catch (err) {
        throw new Error('Erreur lors de la récupération de la catégorie : ' + err.message);
    }
};

module.exports = {
    getAllCategories,
    getCategoryByName
};
