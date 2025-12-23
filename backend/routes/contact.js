const express = require('express');
const nodemailer = require('nodemailer');
const pool = require('../db/db');
const router = express.Router();

// Transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { artisanId, nom, email, message } = req.body;

    if (!artisanId || !nom || !email || !message) {
      return res.status(400).json({ success: false, error: 'Tous les champs sont obligatoires' });
    }

    // Récupérer artisan
    const [rows] = await pool.query('SELECT nom, email FROM artisans WHERE id = ?', [artisanId]);
    if (rows.length === 0) return res.status(404).json({ success: false, error: 'Artisan introuvable' });

    const artisan = rows[0];

    // Envoyer mail
    await transporter.sendMail({
      from: `"Formulaire Annuaire" <${process.env.EMAIL_USER}>`,
      to: artisan.email,
      replyTo: email,  // l'utilisateur peut être répondu directement
      subject: 'Nouveau message via le formulaire',
      text: `
Nom : ${nom}
Email : ${email}

Message :
${message}
      `,
    });

    res.status(200).json({ success: true, message: 'Message envoyé à l’artisan' });
  } catch (err) {
    console.error('Erreur envoi mail:', err);
    res.status(500).json({ success: false, error: 'Erreur lors de l’envoi du message' });
  }
});

module.exports = router;




