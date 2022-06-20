import express, { Express } from "express";
import cors from "cors";


const app: Express = express();
app.use(express.json());
app.use(cors());

// =========== 1) ===========

//  a) O construtor dentro da classe serve para inicializar um atributo que a classe tem,
// para chamarmos o contructor precisamos colocar a palavra reservado new antes do nome da classe

// b)

type Transaction1 = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction1[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

}

const bernardo = new UserAccount('00011122233', 'name', 20)


// Não foi impressa no terminal a mensagem "Chamando o construtor da classe UserAccount"

// b)  Não ppodemos ter acesso a propriedades privadas fora co escopo da classe , apenas dentro de uma classe

// =========== 2) ===========
// transformar para classe
// type Transaction = {
//     description: string,
//     value: number,
//     date: string
// }


class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description,
            this.date = date;
        this.value = value
    }

    public getDescription(): string {
        return this.description;
    }
    public setDescription(value: string) {
        this.description = value;
    }
    public getValue(): number {
        return this.value;
    }
    public setValue(value: number) {
        this.value = value;
    }
    public getDate(): string {
        return this.date;
    }
    public setDate(value: string) {
        this.date = value;
    }


}

class Bank {

    private saldo: number;
    private cpf: string;
    private name: string;
    private accounts: number;

    constructor(accounts: number, name: string, cpf: string, saldo: number) {
        this.accounts = accounts
        this.name = name
        this.cpf = cpf
        this.saldo = saldo
    }
    public getAccounts(): number {
        return this.accounts;
    }
    public setAccounts(value: number) {
        this.accounts = value;
    }
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    public getCpf(): string {
        return this.cpf;
    }
    public setCpf(value: string) {
        this.cpf = value;
    }

    public getSaldo(): number {
        return this.saldo;
    }
    public setSaldo(value: number) {
        this.saldo = value;
    }


}


const server = app.listen(3003, () => {
    console.log('server is running 3003');
});