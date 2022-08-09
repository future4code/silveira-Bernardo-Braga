import { ingredientsType } from './../Types/PizzaTypes/Ingredients';
import { PizzaType } from "../Types/PizzaTypes/Pizza";
import { InputError } from '../Error/InvalidInput';




export class PizzaBussiness {

    public async PostPizza(pizza: PizzaType, ingredients: Array<ingredientsType>) {
        const { name, price } = pizza


        if (!name || !price) {
            throw new InputError('something is wrong in name and/or price')
        }
        if (ingredients.length === 0) {
            throw new InputError('please tell me ... the ingredients of the pizza, please')
        }



    }


}