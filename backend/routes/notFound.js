// routes/notFound.js
module.exports = (req, res) => {
  res.status(404).json({
    error: '404',
    message: 'Page non trouvée'
  });
};
