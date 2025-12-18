const express = require('express');
const router = express.Router();

const {
  getAllTop,
  getTopByCategorie
} = require('../services/top.service');

// GET /api/top
router.get('/', async (req, res) => {
  try {
    const artisansTop = await getAllTop();
    res.json(artisansTop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/top/:categorie
router.get('/:categorie', async (req, res) => {
  try {
    const artisansTop = await getTopByCategorie(req.params.categorie);
    res.json(artisansTop);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
