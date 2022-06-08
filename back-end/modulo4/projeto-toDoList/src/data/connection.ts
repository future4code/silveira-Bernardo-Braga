import knex from "knex";


const connection = knex({ //estabelece uma conexao com o banco
    client: 'mysql',
    connection: {
        host: '35.226.146.116',
        port: 3306,
        user: '21814729-bernardo-braga',
        password: '0EZqUJgu90Q9B0Nu/v+S',
        database: 'silveira-21814729-bernardo-braga',
        multipleStatements: true

    }

})
export default connection