import mongoose from "mongoose"

const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log('mongoDb connected')
    } catch (error) {
        console.log("error",error)
    }
}
export default connectDB