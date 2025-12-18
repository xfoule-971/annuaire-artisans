const express = require('express');
const app = express();

app.use(express.json());

// routes API
app.use('/api', require('./routes'));

// page d’accueil (si tu en as une)
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l’API Annuaire Artisans' });
});

// page 404
app.use(require('./routes/notFound'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
