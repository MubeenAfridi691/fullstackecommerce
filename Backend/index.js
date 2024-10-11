const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routes/Router');
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const connectdb = require('./ConnectDB');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Connect to the database
connectdb();

// Enable CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true // Allow credentials
};
app.use(cookieParser()); // To parse cookies
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true // Allow credentials (cookies)
}));


// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/', router);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
