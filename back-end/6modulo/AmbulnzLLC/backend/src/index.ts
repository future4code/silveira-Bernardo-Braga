import dotenv from "dotenv";
import { app } from "./app";
import PizzaController from "./Controller/PizzaController";


dotenv.config();


const pizzaController = new PizzaController()

app.post('/pizza', pizzaController.PostPizza)

app.get('/pizza', pizzaController.GetPizza)
app.post('/orders',)

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