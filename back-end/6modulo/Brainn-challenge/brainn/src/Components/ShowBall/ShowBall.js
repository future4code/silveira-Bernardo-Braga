import { useEffect } from "react";
import { useGlobal } from "../../Global/GlobalStateContext";
import { Ball, NumberInsideTheBall } from "../../Pages/StyledU";


export default function ShowBall(props) {
    const { states, requests } = useGlobal();

    const concurso = states.concursosById
    console.log(props);
    // console.log(states);

    const loteriaConcurso = states.loteriaConcurso

    console.log(loteriaConcurso);
    useEffect(() => {
        { loteriaConcurso && requests.getConcursosById(loteriaConcurso[Number(props.loteriaConcurso)]) }
    }, [])


    const doBall = concurso && concurso.numeros && concurso.numeros.map((num) => {
        // console.log(num);
        return (<Ball key={num}>
            <NumberInsideTheBall> {num} </NumberInsideTheBall>


        </Ball>)
    })


    return (
        <div>
            {states && doBall}
        </div>



    )

}
