const express=require('express');
const mealplanRouter = require('./routes/mealplanRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser =require('cookie-parser');
const morgan=require('morgan');
const logger = require('./utils/logger');
const cors=require('cors');

const app=express();
app.use(express.json()); 
app.use(cookieParser());
app.use(logger);
app.use(cors({
    origin:'http://localhost:5173/'
}));
//listen for incomin g requires

app.use('/mealplans',mealplanRouter);
app.use('/auth', authRouter);
module.exports=app;