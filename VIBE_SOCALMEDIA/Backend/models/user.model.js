import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    passwrod: {
        type: String,
        required: true,
    },

    profileImage: {
        type: String,
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    saved: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Post" 
        }
    ],
    loops: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Loop"
        }
    ],
    story: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Story"
    }
        
    

}, { timestamps: true })

const User = mongoose.model("user", userSchema)
export default User