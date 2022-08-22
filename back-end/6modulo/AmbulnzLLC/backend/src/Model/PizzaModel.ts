

export default class PizzaModel {
    constructor(
        private id: string,
        private name: string,
        private price: string
    ) { }

    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    public getPrice(): string {
        return this.price;
    }
    public setPrice(value: string) {
        this.price = value;
    }
}