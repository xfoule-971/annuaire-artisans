const express = require('express');
const nodemailer = require('nodemailer');
const pool = require('../db/db');

const router = express.Router();

// Transporteur Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { artisanId, nom, email, message } = req.body;

    // Validation formulaire
    if (!artisanId || !nom || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Tous les champs sont obligatoires'
      });
    }

    // Récupération email artisan
    const [rows] = await pool.query(
      'SELECT nom, email FROM artisans WHERE id = ?',
      [artisanId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Artisan introuvable'
      });
    }

    const artisan = rows[0];

    // Email format formulaire de contact
    const mailOptions = {
      from: `"Formulaire de contact" <${process.env.MAIL_USER}>`,
      to: artisan.email,
      replyTo: email,
      subject: 'Nouveau message via le formulaire de contact',
      text: `
Vous avez reçu un nouveau message depuis le formulaire de contact.

Nom : ${nom}
Email : ${email}

Message :
${message}

---
Répondez directement à cet email pour contacter le visiteur.
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Message envoyé à l’artisan'
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Erreur lors de l’envoi du message'
    });
  }
});

module.exports = router;

