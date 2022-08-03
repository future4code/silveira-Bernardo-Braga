import react, { useEffect } from 'react'
import ShowBall from '../../Components/ShowBall/ShowBall';
import { useGlobal } from '../../Global/GlobalStateContext';
import { Button, Concurso, Data, MainContainerU, NameLoteria } from '../StyledU';
import { ContainerLF } from "./StyledLF";



export default function LotoFacil() {
    const { states, requests } = useGlobal();


    return (
        <MainContainerU>
            <ContainerLF>

                <Button>bernardo</Button>


                <NameLoteria>MEGA-SENA</NameLoteria>
                {/* {states.loteria && <p>{states.loteria[0].name} */}
                <Concurso>CONCURSO</Concurso>
                <Data>02/08/2022</Data>



            </ContainerLF>

            {states.concursosById && states && states.loteriaConcurso[2] && <ShowBall LoteriaConcurso={states.loteriaConcurso[2]} />}

        </MainContainerU >
    )
}