import mongoose from "mongoose";
const register_model= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    accessToken:{
        type:String
        
    },
    date:{
        type:Date,
        default:Date.now
    }
})
export default mongoose.model('user_register',register_model)