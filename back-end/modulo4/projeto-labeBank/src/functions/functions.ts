import { Client, Extract } from "../data/types";


export function generateNewId(users: Array<Client | Extract>): number {
    let id = users.length

    // o valor retornado tem que ser armazenado em id no objeto principal
    return id + 1
}

export function getAge(data: string): number {
    let age = 0
    const date = new Date
    let thisYear = date.getFullYear()
    let yearOfData = ''

    for (let i = 6; i < 10; i++) {

        yearOfData += data[i]
        // 20 / 08 / 2001
        // 01 2 34 5 6789
    }
    console.log(yearOfData)
    const yearOfDataNumber = Number(yearOfData)
    age = thisYear - yearOfDataNumber

    // o valor retornado tem que ser armazenado em age no objeto principal
    return age

}

export function getBalance(payments: Array<Extract>): number {

    let balance = 0

    for (let i = 0; i < payments.length; i++) {

        balance += payments[i].value

    }

    // o valor retornado tem que ser adicionado em balance no objeto principal

    return balance

}

export function verifyByCPF(cpf: string, users: Array<Client>): number {
    //  retorna true  se nao tiver cpf na lista, e false se tiver
    let position = -1
    for (let i = 0; i < users.length; i++) {

        if (users[i].cpf === cpf) {
            position = i;
            return position
        }
    }
    return position
}

export function verifyByName(name: string, users: Array<Client>): boolean {
    //  retorna true  se nao tiver name na lista, e false se tiver

    for (let i = 0; i < users.length; i++) {

        if (users[i].name === name) {

            return false
        }
    }
    return true
}

export function verifyByBirthDay(birthDay: string, users: Array<Client>): boolean {
    //  retorna true  se nao tiver birthDay na lista, e false se tiver

    for (let i = 0; i < users.length; i++) {

        if (users[i].birthDay === birthDay) {

            return false
        }
    }
    return true
}