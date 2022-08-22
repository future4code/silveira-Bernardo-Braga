



export default class orderModel {
    constructor(
        private id: string,
        private namePizza: string,
        private idPizza: string,
        private quantity: number
    ) { }


    public getId(): string { return this.id }
    public getNamePizza(): string { return this.namePizza }
    public getIdPizza(): string { return this.idPizza }
    public getQuantity(): number { return this.quantity }



}