import React from "react";
import { Text } from "../ShouPizza/StylePS";

import { ContainerSI } from "./StyleSI";





export default function ShowIngredients(props) {

    // console.log('chegou ShowIngredients');
    // console.log(props);

    const ingredients = props.Ingredients

    return (
        <ContainerSI>

            <Text> {ingredients.name} </Text>
        </ContainerSI>
    )
}