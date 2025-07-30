import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongodb connected Successfully");
    } catch (error) {
        console.log(error.message, "MongoDB Connenction has been Failed");
    }
}

export default connectDb