import react, { useEffect } from 'react'
import ShowBall from '../../Components/ShowBall/ShowBall';
import { useGlobal } from '../../Global/GlobalStateContext';
import { Button, Concurso, Data, MainContainerU, NameLoteria } from '../StyledU';
import { ContainerMS } from "./StyledMS";



export default function MegaSena() {
    const { states, requests } = useGlobal();

    console.log(states);

    // useEffect(())

    // console.log(states.loteria);
    // const Nome = () => {
    //     console.log(states.loteria[0]);
    //     return (<p>{states.loteria[0].name}</p>)
    // }


    // falta criar as paginas dos outros sorteios 

    return (
        <MainContainerU>
            <ContainerMS>

                <Button>bernardo</Button>


                <NameLoteria>MEGA-SENA</NameLoteria>
                {/* {states.loteria && <p>{states.loteria[0].name} */}
                <Concurso>CONCURSO</Concurso>
                <Data>02/08/2022</Data>



            </ContainerMS>

            {states.concursosById && states && <ShowBall Id={0} />}

        </MainContainerU >
    )
}