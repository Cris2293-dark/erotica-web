const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

// Middleware para servir archivos estáticos del frontend (si tienes uno)
app.use(express.static(path.join(__dirname, '../client')));

// Ruta de ejemplo para historias
app.get('/api/stories', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Noche de confesiones',
      content: 'Ella no sabía cuánto deseaba ser descubierta...'
    },
    {
      id: 2,
      title: 'El susurro en la biblioteca',
      content: 'Sus dedos rozaron el lomo del libro, pero fue otra cosa lo que la estremeció.'
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
