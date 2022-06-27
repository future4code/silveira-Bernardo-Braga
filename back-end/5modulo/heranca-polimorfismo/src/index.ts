import { Industry } from './class/Industry';
import { Commerce } from './class/Commerce';

import express, { Express } from "express";
import cors from "cors";
import { User } from "./class/User";
import { Customer } from "./class/Costumer";
import { Client } from "./class/Client";
import { Place } from "./class/Place";
import { Residence } from './class/Residence';

const app: Express = express();
app.use(express.json());
app.use(cors());

// sistema de uma loja

// Começaremos implementando a fase inicial desse projeto, que precisa de um gerenciamento de usuários

// Todo usuário deve possuir 4 informações importantes:
//      - identificador (id) único que é uma string qualquer
//      - um email
//      - um nome
//      - e uma senha

// há 3 tipos de usuários

//      - Os consumidores são os clientes; precisamos guardar o número do cartão de crédito deles e o total de compras (em R$) que eles já realizaram no estabelecimento.

//      - Os funcionários são os contratados para trabalhar na loja e devem possuir um valor que indica o salário base deles.

//      - os vendedores são funcionários com uma propriedade importante: a quantidade de vendas que eles já realizaram. Essa informação é necessária para calcular a comissão que eles vão ganhar no fim do mês.

// ================ Herança ================

// ================ 1 ================

const user = new User('1234567890', 'bernardo@braga.com', 'bernardo', '123456')
console.log(user);
// nao seria possivel imprimir a senha do user, pois eh um atributo private e nao possui get ou set

// foi chamado o console.log(); do construtor 1 vez pois apenas estou instanciando o objeto 1 unica vez

// ================ 2 ================
const customer = new Customer('123', 'bernardo@braga', 'bernardo', 'qwerty', 'credit')

console.log(customer);

//  apareceu a mensagem "Chamando o construtor da classe Customer" apenas 1 vez
//  apareceu a mensagem "Chamando o construtor da classe User" apenas 1 vez, pois o numero de instancias foi apenas 1 vez , passando pelo construtor das 2 classes pois customer extende de User, ou seja passa pelas 2 classes


// ================ 3 ================
console.log(customer.purchaseTotal);
console.log(customer.getCreditCard());

// nao seria possivel imprimir a senha , pois uma vez que ela eh privada e sem get ou set nao tem como ver esse atributo

// ================ 4 ================

customer.introduceYourself()  // saida: => Olá, bom dia! bernardo

// ================ 5 ================

customer.introduceYourself()  // saida: => Olá, bom dia! bernardo











// ================ POLIMORFISMO ================

// sistema para auxiliar o cálculo de contas de energia elétrica

// O valor base de cada kWh é R$0.75. 

// O Cliente Residencial paga a tarifa cheia(ou seja, R$0.75)

// O Cliente Comercial possui um desconto de 30 % do valor total(ou seja, paga R$0.53).
// Por fim, para o Cliente Industrial, há um desconto de 40 % do valor total(ou seja, paga R$0.45) mais um valor fixo de R$100, 00 por máquina usada na fábrica.


const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}
console.log(client);

// ================ 2 ================

// const place = new Place() // Cannot create an instance of an abstract class.

const industry = new Industry(3, '12334')
const commerce = new Commerce(3, '12334')
const residence = new Residence(12, '12334')

console.log(industry.getCep());
console.log(commerce.getCep());
console.log(residence.getCep());


const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});
