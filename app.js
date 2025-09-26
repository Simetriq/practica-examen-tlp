import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/database.js";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// app.use("/api");

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(` Servidor escuchando en el puerto ${PORT}`);
    console.log(` MongoDB conectado correctamente`);
  } catch (error) {
    console.error(" Error al iniciar el servidor:", error);
  }
});
