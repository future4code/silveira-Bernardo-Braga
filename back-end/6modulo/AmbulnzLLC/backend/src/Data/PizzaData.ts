import PizzaModel from "../Model/PizzaModel";
import { connection } from "./Connection";



const PIZZA_DB = 'AMBULNZLLC_PIZZA'
export class PizzaData {

    public async insertPizza(pizza: PizzaModel) {

        try {
            await connection.insert({
                id: pizza.getId(),
                name: pizza.getName(),
                price: pizza.getPrice()
            }).into(PIZZA_DB)
        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)

        }

    }

    public async GetPizza() {
        try {

            const result = await connection(PIZZA_DB)
            // console.log(result);
            return result
        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)

        }

    }


}