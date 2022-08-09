import { Request, Response } from "express";
import { ingredientsType } from "../Types/PizzaTypes/Ingredients";
import { PizzaType } from "../Types/PizzaTypes/Pizza";



export default class PizzaController {

    public async PostPizza(req: Request, res: Response) {
        const { name, price, listIngredients } = req.body

        const pizza: PizzaType = { name, price }

        const ingredients: Array<ingredientsType> = listIngredients



    }


}