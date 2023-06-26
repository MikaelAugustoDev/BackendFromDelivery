import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

app.get("/user", async (req, res) => {
    const users = await prisma.usuario.findMany();
    res.json(users);
});

const PortEnv = process.env.PORT;

app.listen(PortEnv, () => console.log("Servidor Rodando com Sucesso!"));