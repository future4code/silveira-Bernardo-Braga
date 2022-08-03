import react, { useEffect } from 'react'
import ShowBall from '../../Components/ShowBall/ShowBall';
import { useGlobal } from '../../Global/GlobalStateContext';
import { Button, Concurso, Data, MainContainerU, NameLoteria } from '../StyledU';
import { ContainerLM } from "./StyledLM";



export default function LotoMania() {
    const { states, requests } = useGlobal();


    return (
        <MainContainerU>
            <ContainerLM>

                <Button>bernardo</Button>


                <NameLoteria>MEGA-SENA</NameLoteria>
                {/* {states.loteria && <p>{states.loteria[0].name} */}
                <Concurso>CONCURSO</Concurso>
                <Data>02/08/2022</Data>



            </ContainerLM>

            {states.concursosById && states && states.loteriaConcurso[4] && <ShowBall LoteriaConcurso={states.loteriaConcurso[4]} />}

        </MainContainerU >
    )
}