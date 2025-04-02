import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    userId:{

    },
    body:{
        type:String,
        requires:true
    },
    likes:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        requires:Date.now
    },
    updatedAt:{
        type:Date,
        requires:Date.now
    },
    media:{
        type:String,
        default:''
    },
    active:{
        type:Boolean,
        default:true
    },
    fileType:{
         type:String,
        default:''
    }


});

const Post=mongoose.model("Post",postSchema)

export default Post;