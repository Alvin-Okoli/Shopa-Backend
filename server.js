import express from 'express';
import cors from 'cors';
import router from './Router/route.js';
import mongoose, { connect } from 'mongoose';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();
const mongoKey = process.env.MONGODBURL;
const port = process.env.PORT || 3000;

// Initialize Express app
const app = express();
app.use(cors({
    origin: 'https://localhost:5173',
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));


// test url
app.get('/', (req, res) => {
    res.send('Hello World we are Shopco 😁!');
});

// mongoose setup
mongoose.connect(mongoKey)
.then(console.log('db connected'))
.catch(err=>console.error(err))

// start server
app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});

app.use(router)