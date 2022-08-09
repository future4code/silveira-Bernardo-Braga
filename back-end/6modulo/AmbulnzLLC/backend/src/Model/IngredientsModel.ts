import { ingredientsType } from "../Types/PizzaTypes/Ingredients";




export default class IngredientsModel {
    constructor(
        private id: string,
        private name: Array<ingredientsType>,
        private idPizza: string
    ) { }

    public getName(): Array<ingredientsType> {
        return this.name;
    }
    public setName(value: Array<ingredientsType>) {
        this.name = value;
    }
    public getIdPizza(): string {
        return this.idPizza;
    }
    public setIdPizza(value: string) {
        this.idPizza = value;
    }
    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }



}