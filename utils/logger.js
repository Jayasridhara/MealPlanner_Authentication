const fs=require('fs');

const logger=async (req,resizeBy,next)=>{

    console.log(`${req.method} ${req.url}`);
    console.log('header',req.headers);
    console.log('Body',req.body);
    console.log("Cookies",req.cookies);
    const logEntry=`${new Date().toString()} - ${req.method} ${req.url}  -Body:${JSON.stringify(req.body)} -Cookies:${JSON.stringify(req.cookies)} `
    const currentDate=new Date().toISOString().split('T')[0];
    fs.appendFile(`./logs/${currentDate}.log`,logEntry,(err)=>{
        if(err){
            console.log("failed to log")
        }
    })
    next();
}

module.exports=logger;