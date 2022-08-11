import dotenv from "dotenv";
import { app } from "./app";
import OrderController from "./Controller/OrderController";
import PizzaController from "./Controller/PizzaController";


dotenv.config();


const pizzaController = new PizzaController()
const orderController = new OrderController()
app.post('/pizza', pizzaController.PostPizza)

app.get('/pizza', pizzaController.GetPizza)
app.post('/orders', orderController.PostOrder)
app.get('/orders', orderController.GetOrder)
app.get('/ordersById', orderController.GetOrderById)

/* 

EXEMPLO DE SAIDA ESPERADA 


[
  {
    "name": "Margherita",
    "price": 5,
    "ingredients": [
      "tomato",
      "mozzarella"
    ]
  },
  {
    "name": "Bufala",
    "price": 6,
    "ingredients": [
      "tomato",
      "mozarella di bufala"
    ]
  },
  {
*/