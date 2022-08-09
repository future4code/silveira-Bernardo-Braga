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


}