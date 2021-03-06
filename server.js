const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')

// load environment variables
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json())

// Enable cors
app.use(cors())

// Routes
app.use('/api/v1/stores',require('./routes/stores'))


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))