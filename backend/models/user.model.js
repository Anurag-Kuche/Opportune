import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true;
    },
    username:{
        type:String,
        requires:true,
        unique:true
    },
    email:{
        type:String,
        requires:true,
        unique:true
    },
    active:{
        type:Boolean,
        default:true
    },
    password:{
        type:String,
        required:true
    },
    pofilePicture:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        requires:Date.now
    },
    
    token:{
        type:String,
        default:''
    }


});

const User=mongoose.model("User",UserSchema)

export default User;