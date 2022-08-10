import IngredientsModel from "../Model/IngredientsModel";
import { connection } from "./Connection";


const INGREDIENTS_DB = 'AMBULNZLLC_INGREDIENTS'

export class IngredientsData {

    public async insertIngredients(ingredients: IngredientsModel, name: string) {

        try {
            await connection.insert({
                id: ingredients.getId(),
                name: name,
                id_pizza: ingredients.getIdPizza()
            }).into(INGREDIENTS_DB)
        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)

        }
    }


    public async GetIngredients() {
        try {

            const result = await connection(INGREDIENTS_DB)
            // console.log(result);
            return result
        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)

        }

    }

    public async GetIngredientsById(id_pizza: string) {
        try {

            const result = await connection(INGREDIENTS_DB).where({ id_pizza })
            // console.log(result);
            return result
        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)

        }

    }


}