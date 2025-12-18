const express = require('express');
const router = express.Router();

const {
  getAllArtisans,
  getArtisanByNom
} = require('../services/artisan.service');

// GET /api/artisans
router.get('/', async (req, res) => {
  try {
    const artisans = await getAllArtisans();
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/artisans/:nom
router.get('/:nom', async (req, res) => {
  try {
    const artisan = await getArtisanByNom(req.params.nom);
    res.json(artisan);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
