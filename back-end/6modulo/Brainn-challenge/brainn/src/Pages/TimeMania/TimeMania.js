import react, { useEffect } from 'react'
import ShowBall from '../../Components/ShowBall/ShowBall';
import { useGlobal } from '../../Global/GlobalStateContext';
import { Button, Concurso, Data, MainContainerU, NameLoteria } from '../StyledU';
import { ContainerTM } from "./StyledTM";



export default function TimeMania() {
    const { states, requests } = useGlobal();


    return (
        <MainContainerU>
            <ContainerTM>

                <Button>bernardo</Button>


                <NameLoteria>MEGA-SENA</NameLoteria>
                {/* {states.loteria && <p>{states.loteria[0].name} */}
                <Concurso>CONCURSO</Concurso>
                <Data>02/08/2022</Data>



            </ContainerTM>

            {states.concursosById && states && states.loteriaConcurso[0] && <ShowBall LoteriaConcurso={states.loteriaConcurso[0]} />}

        </MainContainerU >
    )
}