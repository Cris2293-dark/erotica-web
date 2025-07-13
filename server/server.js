const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080; // Usa el puerto dinámico de Railway

// Middleware y rutas aquí...

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
