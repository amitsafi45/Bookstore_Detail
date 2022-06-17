import mongoose from "mongoose";
//import 'dotenv/config'
export default async(req,res,next)=>{
    try{
        await mongoose.connect(process.env.DATA_BASE_URL)
        console.log('connect')
        next()
    }
    catch(error){
        console.log(error)
    }
}