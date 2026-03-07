import mongoose from "mongoose";
const dbName = "CipherSQLStudio";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
	try {
		await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`);
		console.log("Database connected");
	} catch (error) {
		console.log(error);
    process.exit(1);
	}
};
