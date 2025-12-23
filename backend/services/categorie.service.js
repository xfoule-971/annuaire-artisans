const pool = require('../db/db'); // fichier db.js qui exporte le pool mysql2/promise

// Récupérer toutes les catégories uniques
const getAllCategories = async () => {
    try {
        const [rows] = await pool.query('SELECT DISTINCT categorie FROM artisans');
        return rows.map(r => r.categorie); // renvoie un tableau de strings ['batiment', 'services', ...]
    } catch (err) {
        throw new Error('Erreur lors de la récupération des catégories : ' + err.message);
    }
};

// Récupérer tous les artisans d'une catégorie spécifique
const getCategoryByName = async (nom) => {
    try {
        const [rows] = await pool.query('SELECT * FROM artisans WHERE categorie = ?', [nom]);
        if (rows.length === 0) throw new Error('Aucun artisan trouvé pour cette catégorie');
        return rows; // renvoie un tableau d'objets { id, nom, ville, categorie, ... }
    } catch (err) {
        throw new Error('Erreur lors de la récupération de la catégorie : ' + err.message);
    }
};

module.exports = {
    getAllCategories,
    getCategoryByName
};

