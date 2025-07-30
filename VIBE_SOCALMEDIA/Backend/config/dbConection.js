import mongoose from "mongoose"

export const connectDb = async (MONGODB_URI) => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Mongodb connected Successfully");
    } catch (error) {
        console.log(error.message, "MongoDB Connenction has been Failed");
    }
}