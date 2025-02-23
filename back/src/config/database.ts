import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const uri: string | undefined = process.env.MONGO_URI;
console.log(uri)

if (!uri) {
  throw new Error("❌ ERROR: La variable MONGO_URI no está definida en .env");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("✅ Conectado a MongoDB con Mongoose");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error);
    process.exit(1);
  }
};
