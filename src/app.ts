import express from 'express';
import userRouter from './user/userRouter';
import {createUser} from './user/userController';

const app = express();

app.get("/",(req,res,next)=>{
    res.json({message:"Webcome bro..."})
})

app.use("/api/users",createUser);

export default app;