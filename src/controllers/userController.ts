import { PrismaClient } from "@prisma/client";
import {Request, Response} from "express";

const prisma = new PrismaClient();

const userController = async (req: Request, res: Response) => {
    try {
        await prisma.usuario.create({
            data: {
                nome: "Teste",
                email: "teste@gmail.com",
                senha: "teste123",
            },
        });

        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao criar usuário");
    }
};

export default userController;
