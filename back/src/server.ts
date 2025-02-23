import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { connectDB } from "./config/database";
import routes from "./routes";

dotenv.config();

const app: Application = express();
const PORT: Number = Number(process.env.PORT) || 3000;

// Middleware
app.use(cors());
app.use(express.json());

(async () => {
  try {
    await connectDB();

    app.use('/api', routes);

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
})();