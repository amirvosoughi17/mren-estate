import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("App connected to MongoDB"))
    .catch((error) => {
        console.log(`DB Connection Error error: ${error.message}`)
    });
app.listen(3000, () => {
    console.log('server is running on port 3000')
});