import { generateId } from './../Services/IdGenerator';
import { InputError } from '../Error/InvalidInput';
import { orderType } from './../Types/OrderTypes/Orders';
import orderModel from '../Model/OrderModel';
import OrderData from '../Data/OrderData';
import { PizzaData } from '../Data/PizzaData';







export default class OrderBusiness {

    public async PostOrder(order: orderType) {

        const { namePizza, idPizza, quantity } = order;

        if (!namePizza || !idPizza || !quantity) {
            throw new InputError('something is wrong in namePizza and/or idPizza and/or quantity')
        }

        const pizzaData = new PizzaData()
        const orderDB = new OrderData()

        const quantityN = Number(quantity)

        if (quantityN == NaN) {
            throw new InputError('quantity is not a number')
        }

        const returnPizzaId = await pizzaData.GetPizzaByid(idPizza)

        // console.log(returnPizzaId);
        if (returnPizzaId.length < 1 || returnPizzaId.length > 1) {
            throw new InputError('idPizza is wrong')
        }
        if (namePizza !== returnPizzaId[0].name) {
            throw new InputError('namePizza is wrong')
        }
        //verificacao de : se existe o idPizza , o namePizza bate com o idPizza 


        const id = generateId()

        const OrderMdl = new orderModel(id, namePizza, idPizza, quantity)


        await orderDB.insertOrder(OrderMdl)

        return


    }

    public async GetOrder() {

        const orderDB = new OrderData()
        const result = await orderDB.getOrder()
        return result


    }

    public async GetOrderById(id: string) {


        if (!id) {
            throw new InputError('id does not exist ')

        }

        const orderDB = new OrderData()


        const result = await orderDB.getOrderById(id)

        if (result.length === 0) {
            throw new InputError('id is incorrect')
        }
        return result


    }
}