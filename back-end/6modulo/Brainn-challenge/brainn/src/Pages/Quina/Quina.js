import react, { useEffect } from 'react'
import ShowBall from '../../Components/ShowBall/ShowBall';
import { useGlobal } from '../../Global/GlobalStateContext';
import { Button, Concurso, Data, MainContainerU, NameLoteria } from '../StyledU';
import { ContainerQ } from "./StyledQ";



export default function Quina() {
    const { states, requests } = useGlobal();


    return (
        <MainContainerU>
            <ContainerQ>

                <Button>bernardo</Button>


                <NameLoteria>MEGA-SENA</NameLoteria>
                {/* {states.loteria && <p>{states.loteria[0].name} */}
                <Concurso>CONCURSO</Concurso>
                <Data>02/08/2022</Data>



            </ContainerQ>

            {states.concursosById && states && states.loteriaConcurso[1] && <ShowBall LoteriaConcurso={states.loteriaConcurso[1]} />}

        </MainContainerU >
    )
}