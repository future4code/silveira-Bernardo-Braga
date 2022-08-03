import react, { useEffect } from 'react'
import ShowBall from '../../Components/ShowBall/ShowBall';
import { useGlobal } from '../../Global/GlobalStateContext';
import { Button, Concurso, Data, MainContainerU, NameLoteria } from '../StyledU';
import { ContainerMS } from "./StyledMS";



export default function MegaSena() {
    const { states, requests } = useGlobal();

    console.log(states);

    return (
        <MainContainerU>
            <ContainerMS>

                <Button>bernardo</Button>


                <NameLoteria>MEGA-SENA</NameLoteria>
                {/* {states.loteria && <p>{states.loteria[0].name} */}
                <Concurso>CONCURSO</Concurso>
                <Data>02/08/2022</Data>



            </ContainerMS>

            {states.concursosById && states && states.loteriaConcurso[0] && <ShowBall LoteriaConcurso={0} />}

        </MainContainerU >
    )
}