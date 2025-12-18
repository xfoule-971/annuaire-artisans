const express = require('express');
const router = express.Router();

const {
  getAllCategories,
  getCategoryByName
} = require('../services/categorie.service');

// GET /api/categories
router.get('/', async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/categories/:nom
router.get('/:nom', async (req, res) => {
  try {
    const categorie = await getCategoryByName(req.params.nom);
    res.json(categorie);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
