const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running', time: new Date().toLocaleString() });
});
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => console.log('Backend running on port '+PORT));
