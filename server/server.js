const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('client')); // solo si sirves frontend desde backend

app.get('/', (req, res) => {
  res.send('Servidor backend en producción');
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
