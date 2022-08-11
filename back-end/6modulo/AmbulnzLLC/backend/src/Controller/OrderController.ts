import { Request, Response } from "express";
import OrderBusiness from "../Business/OrderBusiness";
import { orderType } from "../Types/OrderTypes/Orders";





export default class OrderController {


    public async PostOrder(req: Request, res: Response) {
        try {

            const { namePizza, idPizza, quantity } = req.body

            const order: orderType = { namePizza, idPizza, quantity }

            const orderBusiness = new OrderBusiness()

            await orderBusiness.PostOrder(order)


            res.status(200).send('order created')
        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }


    public async GetOrder(req: Request, res: Response) {
        try {

            const orderBusiness = new OrderBusiness()

            const result = await orderBusiness.GetOrder()
            res.status(200).send({ result })
        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }
    public async GetOrderById(req: Request, res: Response) {
        try {

            const { id } = req.body

            const orderBusiness = new OrderBusiness()

            const result = await orderBusiness.GetOrderById(id)
            res.status(200).send({ result })
        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }
}