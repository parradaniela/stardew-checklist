require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConnection');
const PORT = process.env.PORT;

connectDB();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/Forage', require('./routes/forageRoutes'));

mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB');
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', err => {
	console.log('Error connecting to the database: ', err);
});
