import { convertLength } from "@mui/material/styles/cssUtils";
import { useGlobal } from "../../Global/GlobalStateContext";
import { MainContainer } from "../../Pages/Styled";
import GraficoInfo from "./GraficoInfo";
import ShowInfoUser from "./ShowInfoUser";
import { Main, MainTable, Tabela, Tbody, Th, Thead, Tr } from "./StyledTable";


export default function Table() {
    const { states } = useGlobal();


    // console.log(states.user)



    const mostraInfoUser = states.user.userInfo && states.user.userInfo.map((user) => {
        // console.log("====================")
        // console.log(user)
        return (

            <ShowInfoUser User={user} key={user.id} />

        )
    })

    return (
        <Main>
            <h1>
                Cubo-Challenge, Bernardo Braga
            </h1>
            <p>Favor inserir no formulário o seu nome o sobrenome e a quantidade de participação que vc contribuiu</p>
            <MainTable>

                <Tabela>
                    <Thead>
                        <Tr>
                            <Th>
                                first_name
                            </Th>

                            <Th>
                                last_name
                            </Th>
                            <Th>
                                participation
                            </Th>
                            <Th>
                                percent
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            states.user && mostraInfoUser
                        }
                    </Tbody>
                </Tabela>

                <GraficoInfo />

            </MainTable>
        </Main>
    )
}




