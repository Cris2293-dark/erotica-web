const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('client')); // Si quieres servir HTML estático

app.get('/api/stories', (req, res) => {
  res.json([
    { id: 1, title: 'Primera historia', content: '...' },
    { id: 2, title: 'Segunda historia', content: '...' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
