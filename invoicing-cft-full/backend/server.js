// Simple Express server placeholder
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('../frontend'));

app.listen(PORT, () => {
  console.log(`Invoice API running on port ${PORT}`);
});
