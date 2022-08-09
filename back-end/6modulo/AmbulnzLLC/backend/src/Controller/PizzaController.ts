import { Request, Response } from "express";
import { PizzaBussiness } from "../Business/PizzaBusiness";
import { ingredientsType } from "../Types/PizzaTypes/Ingredients";
import { PizzaType } from "../Types/PizzaTypes/Pizza";



export default class PizzaController {

    public async PostPizza(req: Request, res: Response) {
        try {

            const { name, price, ingredients } = req.body

            const pizza: PizzaType = { name, price }

            const ingredient: Array<ingredientsType> = ingredients

            console.log(pizza);
            console.log(ingredient);

            const pizzaBS = new PizzaBussiness()
            const result = pizzaBS.PostPizza(pizza, ingredient)

            console.log('passou aqui');

            res.status(200).send('pizza criada com sucesso')
        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }


    }


}