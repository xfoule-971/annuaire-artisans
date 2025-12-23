require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// rendre le dossier uploads public
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// routes API
app.use('/api', require('./routes'));

// page d’accueil
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l’API Annuaire Artisans' });
});

// page 404 → TOUJOURS à la fin
app.use((req, res) => {
  res.status(404).json({
    error: '404',
    message: 'Page non trouvée'
  });
});

// lancement serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});


