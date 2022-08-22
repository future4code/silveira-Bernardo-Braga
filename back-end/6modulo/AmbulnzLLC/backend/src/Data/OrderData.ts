import orderModel from "../Model/OrderModel";
import { connection } from "./Connection";

const ORDER_DB = 'AMBULNZLLC_ORDERS'

export default class OrderData {

    public async insertOrder(order: orderModel) {

        try {
            await connection.insert({
                id: order.getId(),
                name_pizza: order.getNamePizza(),
                id_pizza: order.getIdPizza(),
                quantity: order.getQuantity()
            }).into(ORDER_DB)
        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)

        }
    }

    public async getOrder() {
        const result = await connection(ORDER_DB)

        return result
    }
    public async getOrderById(id: string) {
        const result = await connection(ORDER_DB).where({ id: id })

        return result
    }

}
