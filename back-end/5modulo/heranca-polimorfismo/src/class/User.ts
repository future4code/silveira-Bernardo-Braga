export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public introduceYourself(): void {
        console.log('Olá, bom dia! ' + this.getName());
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
}


// const user = new User('1234567890', 'bernardo@braga.com', 'bernardo', '123456');