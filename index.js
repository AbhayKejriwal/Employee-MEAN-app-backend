import express from 'express';
import cors from 'cors';
import employeeRouter from './routes/employeeRoutes.js';
import { connectDB } from './utils/connectDB.js';

const app = express();

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

app.use(cors());
app.use(express.json());

connectDB();

app.use('/employee', employeeRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});