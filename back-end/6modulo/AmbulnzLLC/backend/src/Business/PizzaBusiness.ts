import { generateId } from './../Services/IdGenerator';
import { ingredientsType } from './../Types/PizzaTypes/Ingredients';
import { PizzaType } from "../Types/PizzaTypes/Pizza";
import { InputError } from '../Error/InvalidInput';
import PizzaModel from '../Model/PizzaModel';
import IngredientsModel from '../Model/IngredientsModel';
import { PizzaData } from '../Data/PizzaData';
import { IngredientsData } from '../Data/IngredientsData';




export class PizzaBussiness {

    public async PostPizza(pizza: PizzaType, ingredients: Array<ingredientsType>) {
        const { name, price } = pizza


        if (!name || !price) {
            throw new InputError('something is wrong in name and/or price')
        }
        if (ingredients.length === 0) {
            throw new InputError('please tell me ... the ingredients of the pizza, please')
        }

        const idPizza = generateId()



        console.log(idPizza);

        const pizzaModel = new PizzaModel(idPizza, name, price)




        const pizzaData = new PizzaData()
        const ingredientsData = new IngredientsData()
        console.log('==========================');
        await pizzaData.insertPizza(pizzaModel)
        // console.log(ingredientsModel.getName());


        // const indre = ingredientsModel.getName()
        for (let i = 0; i < ingredients.length; i++) {

            const idIngredients = generateId()
            const ingredientsModel = new IngredientsModel(idIngredients, ingredients, idPizza)

            console.log(ingredients[i].name);
            await ingredientsData.insertIngredients(ingredientsModel, ingredients[i].name)
        }


        // await ingredientsData.insertIngredients()









        return 'pizza is ok'
    }


}