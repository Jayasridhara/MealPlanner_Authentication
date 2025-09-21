const express=require('express');
const mealplanRouter = require('./routes/mealplanRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser =require('cookie-parser')
const app=express();
app.use(express.json()); 
app.use(cookieParser());
//listen for incomin g requires

app.use('/mealplans',mealplanRouter);
app.use('/auth', authRouter);
module.exports=app;