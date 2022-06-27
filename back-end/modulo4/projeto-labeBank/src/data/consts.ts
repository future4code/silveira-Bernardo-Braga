import { Client } from "./types";


export const Users: Array<Client> = [
    {
        id: 1,
        name: 'bernardo braga',
        cpf: '066-841-333-33',
        birthDay: '20/08/2001',
        age: 20,
        balance: 0,
        statement: [
            {
                id: 1,
                value: -300,
                date: '03/06/2022',
                description: 'presentes'
            }, {
                id: 2,
                value: -150,
                date: '03/06/2022',
                description: 'academia'
            }, {
                id: 3,
                value: -405,
                date: '03/06/2022',
                description: 'comidas do mes'
            },

        ]
    },

    {
        id: 2,
        name: 'cesar',
        cpf: '066-841-333-34',
        birthDay: '27/08/1987',
        age: 0,
        balance: 0,
        statement: [
            {
                id: 1,
                value: -1300,
                date: '03/06/2022',
                description: 'aluguel'
            }, {
                id: 2,
                value: -950,
                date: '03/06/2022',
                description: 'carro'
            }, {
                id: 3,
                value: -505,
                date: '03/06/2022',
                description: 'comidas do mes'
            },

        ]
    },
]
