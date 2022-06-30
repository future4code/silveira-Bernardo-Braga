

export class User {

    private name: string;
    private senha: string;


    constructor(name: string, senha: string) {

        this.name = name;
        this.senha = senha;

    }

    public getName() {
        return this.name;
    }
    public getSenha() {
        return this.senha;
    }

}