
import React from "react";
import { useGlobal } from "../../Global/GlobalStateContext";
import { Button } from "../../Pages/StylesU";
import ShowIngredients from "../ShowIngredients/ShowIngredients";
import { ContainerIngredients, ContainerPizza, Name, Text } from "./StylePS";



export default function ShowPizza(props) {

    // console.log('chegou no ShowPizza');
    // console.log(props.Pizza);

    const { request } = useGlobal()
    const pizza = props.Pizza

    // console.log(pizza.ingredients);
    const ingredients = pizza.ingredients.map((ingre) => {
        // console.log(ingre);
        return (


            <ShowIngredients
                Ingredients={ingre}
                key={ingre.id}
            />

        )

    })

    const body = {
        namePizza: pizza.name,
        idPizza: pizza.id,
        quantity: 1
    }

    return (

        <ContainerPizza>
            <Name> {pizza.name}</Name>
            <Text>id: {pizza.id}</Text>

            <ContainerIngredients>ingredients: {ingredients}</ContainerIngredients>

            <Text>Price: {pizza.price}</Text>

            <Button onClick={() => {
                console.log(body);
                request.postOrder({
                    namePizza: pizza.name,
                    idPizza: pizza.id,
                    quantity: 1
                })
            }}>pedir pizza</Button>

        </ContainerPizza>

    )
}