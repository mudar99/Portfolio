import mongoose from "mongoose";

const connect = async () => {
    mongoose.set('strictQuery', false);

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Success")
    } catch (error) {
        throw new Error("Connection failed!");
    }
};

export default connect;