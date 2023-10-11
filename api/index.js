import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
const app = express();
app.use(express.json());
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("App connected to MongoDB"))
    .catch((error) => {
        console.log(`DB Connection Error error: ${error.message}`)
    });
app.listen(3000, () => {
    console.log('server is running on port 3000')
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);