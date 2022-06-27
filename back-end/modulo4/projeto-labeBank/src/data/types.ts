

export type Extract = {
    id: number  // importante, tem que ter
    value: number  // importante, tem que ter
    date: string
    description: string
}

export type Client = {
    id: number  // importante, tem que ter
    name: string  // importante, tem que ter
    cpf: string  // importante, tem que ter
    birthDay: string // importante, tem que ter
    age: number
    balance: number
    statement: Array<Extract>

}