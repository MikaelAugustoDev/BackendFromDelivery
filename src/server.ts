import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();

const PortEnv = process.env.PORT;

app.listen(PortEnv, () => console.log("Servidor Rodando com Sucesso!"));