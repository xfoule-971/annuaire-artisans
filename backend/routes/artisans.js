const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// GET /api/artisans
// Si query `search` est présent, filtre par nom exact ou partiel
router.get('/', async (req, res) => {
  const { search } = req.query;
  try {
    let rows;
    if (search) {
      const term = `%${search}%`;
      [rows] = await pool.query('SELECT * FROM artisans WHERE nom LIKE ?', [term]);
    } else {
      [rows] = await pool.query('SELECT * FROM artisans');
    }
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/artisans/:id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM artisans WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Artisan non trouvé' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

