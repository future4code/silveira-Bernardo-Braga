import react, { useEffect } from 'react'
import ShowBall from '../../Components/ShowBall/ShowBall';
import { useGlobal } from '../../Global/GlobalStateContext';
import { Button, Concurso, Data, MainContainerU, NameLoteria } from '../StyledU';
import { ContainerDS } from "./StyledDS";



export default function DiaDeSorte() {
    const { states, requests } = useGlobal();


    return (
        <MainContainerU>
            <ContainerDS>

                <Button>bernardo</Button>


                <NameLoteria>MEGA-SENA</NameLoteria>
                {/* {states.loteria && <p>{states.loteria[0].name} */}
                <Concurso>CONCURSO</Concurso>
                <Data>02/08/2022</Data>



            </ContainerDS>

            {states.concursosById && states && states.loteriaConcurso[5] && <ShowBall LoteriaConcurso={states.loteriaConcurso[5]} />}

        </MainContainerU >
    )
}