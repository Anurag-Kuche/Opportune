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
    status_accepted:{
        type:Boolean,
        deafult:null,
    }

});

const ConnectionRequest=mongoose.model("ConnectRequest",connectionRequest);
export default ConnectionRequest;