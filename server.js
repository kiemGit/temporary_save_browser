const express = require('express');
const app = express();
const PORT = 3005;

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
  res.json({ name: 'Alice', age: 25 });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
