import { Request, Response } from "express";
import { insertTask } from "../data/insertTask";
import { generateId } from "../services/idGenerator";

export const createTask = async (
   req: Request,
   res: Response
) => {
   try {

      const { title, description, deadline, authorId } = req.body

      if (
         !title ||
         !description ||
         !deadline ||
         !authorId
      ) {
         throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
      }

      const id: string = generateId()

      await insertTask({
         id,
         title,
         description,
         deadline,
         authorId,
      })

      res.status(201).end()

   } catch (err: any) {
      res.status(400).send({ message: err.message || err.sqlMessage })
   }
}