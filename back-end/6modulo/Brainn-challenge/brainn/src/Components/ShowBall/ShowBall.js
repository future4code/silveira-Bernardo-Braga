import { useEffect } from "react";
import { useGlobal } from "../../Global/GlobalStateContext";
import { Ball, NumberInsideTheBall } from "../../Pages/StyledU";


export default function ShowBall(props) {
    const { states, requests } = useGlobal();

    const concurso = states.concursosById
    console.log(states);

    useEffect(() => {
        requests.getConcursosById('2359')
    }, [])

    // await requests.getConcursosById("2359")


    const doBall = concurso && concurso.numeros && concurso.numeros.map((num) => {
        console.log(num);
        return (<Ball>
            <NumberInsideTheBall> {num} </NumberInsideTheBall>


        </Ball>)
    })


    return (
        <div>
            {states && doBall}
        </div>



    )

} 