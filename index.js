const express = require('express');
const dotenv = require('dotenv');

// Configuration
dotenv.config();

// Create express app

const app = express();
const port = process.env.PORT || 8000;

//  Rutas
app.get('/', (req, res) => {
	res.send('Hello World');
});

// Escucha
app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
});
