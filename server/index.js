import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import departmentRouter from './routes/department.js';
import connectToDatabase from './db/db.js';
import employeeRouter from './routes/employee.js';
import salaryRouter from './routes/salary.js';
import leaveRouter from './routes/leave.js';
//import adminLeaveRouter from './routes/adminLeave.js'
import adminLeaveRouter from './routes/adminLeave.js'
import adminSummary from './routes/adminSummary.js';

import path from 'path';
// Serve static files from the "uploads" folder
import { fileURLToPath } from 'url';

connectToDatabase()
const app = express()
app.use(cors())
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/auth',authRouter);
app.use('/api/department',departmentRouter);
app.use('/api/employee',employeeRouter);
app.use('/api/salary',salaryRouter);
app.use('/api/leave', leaveRouter);
app.use('/api/adminLeave', adminLeaveRouter);
app.use('/api/adminSummary', adminSummary);


app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on port ${process.env.PORT}`)
})

