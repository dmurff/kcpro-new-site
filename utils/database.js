import mongoose from "mongoose"
let connected = false;

const connectDB = async () => {

    mongoose.set('strictQuery', true)



    if (connected){
        console.log('Database is already connected') 
    return;}

    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log(error)
    }
}