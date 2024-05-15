const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware untuk menyajikan file statis dari folder "public"
app.use(express.static(path.join(__dirname, 'public')));

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});