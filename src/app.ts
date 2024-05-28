import express from 'express';

const app = express();

app.get("/",(req,res,next)=>{
    res.json({message:"Webcome bro..."})
})

export default app;