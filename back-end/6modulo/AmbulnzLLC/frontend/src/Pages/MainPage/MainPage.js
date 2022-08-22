
import ShowPizza from "../../Components/ShouPizza/ShowPizza";
import { useGlobal } from "../../Global/GlobalStateContext"
import { ContainerShowPizza, MainContainer } from "../StylesU";

export default function MainPage() {

    const { states } = useGlobal()
    // console.log(states.pizza.pizzas);
    const pizza = states.pizza.pizzas

    const pizzas = states && states.pizza && pizza !== undefined && pizza.map((pizza) => {
        // console.log(pizza);
        return (
            <ShowPizza
                Pizza={pizza}
                key={pizza.id}
            />
        )
    })
    return (
        <MainContainer>
            button
            <ContainerShowPizza>
                {states && pizza && pizza !== undefined && pizzas}
            </ContainerShowPizza>

        </MainContainer>
    )

}