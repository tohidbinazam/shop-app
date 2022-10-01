import mongoose from "mongoose";


const connectMongoDB = async () => {

    try {
        const connect = await mongoose.connect(process.env.MONGO_STRING)
        console.log(`MongoDB connect successfully with '${connect.connection.name}' database`.bgMagenta);
    } catch (error) {
        console.log('MongoDB connect failed'.bgRed);
    }
}

export default connectMongoDB