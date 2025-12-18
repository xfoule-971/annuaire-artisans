const express = require('express');
const router = express.Router();

const {
  getAllSpecialites,
  getSpecialiteByName
} = require('../services/specialite.service');

// GET /api/specialites
router.get('/', async (req, res) => {
  try {
    const specialites = await getAllSpecialites();
    res.json(specialites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/specialites/:nom
router.get('/:nom', async (req, res) => {
  try {
    const specialite = await getSpecialiteByName(req.params.nom);
    res.json(specialite);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
