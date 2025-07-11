const express = require('express');
const cors = require('cors');
const app = express();
const stories = require('./data/stories.json');

app.use(cors());
app.use(express.json());

app.get('/api/stories', (req, res) => {
  res.json(stories);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
