import mongoose from "mongoose";


const connectToDB=async()=>{
    try {

        await mongoose.connect(`${process.env.MONGODB_URI}/${"Cluster0"}`)
        console.log("DB connected successfully")
        
    } catch (error) {
        console.log("DB connection error")
        console.log(error)
    }
}

export default connectToDB