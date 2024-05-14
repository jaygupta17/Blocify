import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required : true,
        unique : true,
        min: 4,
        max: 9,
    },
    email:{
        type:String,
        required : true,
        unique : true,
    },
    password:{
        type:String,
        required : true,
        min: 8,
        max: 9,
    },
    pfp:{
        type:String,
    },
    isAdmin : {
        type:Boolean,
        default:false,
    },
    followers:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    followersCount : {
        type :Number,
        default : 0,
    }
} , {timestamps:true})

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true,
        min: 8,
        max: 30,
    },
    desc:{
        type:String,
        min: 8,
        max: 200,
    },
    userId:{
        type:String,
        required : true,
    },
    likes:{
        type:Number,
        default:0,
    },
    img:{
        type:String,
        required : true,
    },
    slug:{
        type: String,
        required:true,
        unique : true,
    }
}, {timestamps:true})

export const User = mongoose.models.User || mongoose.model("User",userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post",postSchema);