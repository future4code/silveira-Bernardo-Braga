import knex from "knex";


const connection = knex({ //estabelece uma conexao com o banco
    client: 'mysql',
    connection: {
        
    }

})
export default connection