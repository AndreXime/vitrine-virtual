import { Request, Response } from "express";
import { Empresa } from "../database/models.js";
import { generateToken } from "../middlewares/index.js";

const createEmpresa = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, senha, nome, descricaoCurta } = req.body;
    // Nome precisa ser formartado para facilitar ter outras urls com esse nome
    const formartNome = (nome as string).toLowerCase().replace(/\s+/g, "-");
    const empresa = await Empresa.create({
      data: { email, senha, nome: formartNome, descricaoCurta },
      select: { id: true }
    });
    const token = generateToken(empresa.id);
    res.cookie("token", token, {
      maxAge: 60 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    });
    res.status(200).json({ message: "Sucesso" });
  } catch (error) {
    res.status(400).json({ message: "Essa empresa já existe", error });
  }
};

const loginEmpresa = async (req: Request, res: Response): Promise<void> => {
  try {
    const empresa = await Empresa.findUnique({ where: req.body, select: { id: true } });
    if (!empresa) {
      res.status(400).json({ message: "Essa empresa não existe" });
    } else {
      const token = generateToken(empresa.id);
      res.cookie("token", token, {
        maxAge: 60 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: "lax"
      });
      res.status(200).json({ message: "Sucesso" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error no servidor", error });
  }
};

export default {
  loginEmpresa,
  createEmpresa
};
