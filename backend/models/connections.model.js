import mongoose from "mongoose"

const connectionrequest=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    connectionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    
})