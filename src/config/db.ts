import mongoose from "mongoose";
import {config} from "./config"

const connectDB = async() =>{

    try {

        mongoose.connection.on("connected",()=>{
            console.log("Connected to dataBase SuccessFully");
            
        })

        mongoose.connection.on("error",(err)=>{
            console.log("Error in connecting DataBase",err);
            process.exit(1);
        })

        await mongoose.connect(config.databaseURL as string);


        

    } catch (err) {
        console.error("Failed to Connect to dataBase" ,err);
        
    }
    
}

export default connectDB;