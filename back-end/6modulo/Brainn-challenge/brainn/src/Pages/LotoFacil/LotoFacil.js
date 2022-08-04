import react, { useEffect } from 'react'
import ShowBall from '../../Components/ShowBall/ShowBall';
import { useGlobal } from '../../Global/GlobalStateContext';
import { Button, Concurso, Data, MainContainerU, NameLoteria } from '../StyledU';
import { ContainerLF } from "./StyledLF";

import { useNavigate } from 'react-router-dom';
import { useForm } from '../../Hooks/UseForm';
import { goToPage } from '../../Router/Coordinator';

export default function LotoFacil() {
    const { form, onChange, cleanField } = useForm({ pagina: '' })
    const { states, setters, requests } = useGlobal();
    const navigate = useNavigate();

    const doCheckIn = e => {
        e.preventDefault()
        goToPage(navigate, states.pagina)
        console.log('bernardo');
        console.log(states);
    }
    return (
        <MainContainerU>
            <ContainerLF>
                <form onSubmit={doCheckIn}>
                    <select name="pagina" value={states.pagina} onChange={(e) => { setters.setPagina(e.target.value) }}>

                        <option value="/diadesorte" >Dia de Sorte</option>
                        <option value="/lotofacil" >Loto Facil</option>
                        <option value="/lotomania" >Loto Mania</option>
                        <option value="/" >Mega-Sena</option>
                        <option value="/quina" >Quina</option>
                        <option value="/timemania" >Time Mania</option>

                    </select>
                    <Button>IR PARA A PAGINA</Button>
                </form>
                {
                    states && states.loteria && states.loteria[0] &&
                    <NameLoteria>{states.loteria[2].nome}</NameLoteria>
                }
                <Concurso>CONCURSO</Concurso>
                <Data>02/08/2022</Data>
            </ContainerLF>
            {states.concursosById && states && states.loteriaConcurso[2] && <ShowBall LoteriaConcurso={2} />}
        </MainContainerU >
    )
}