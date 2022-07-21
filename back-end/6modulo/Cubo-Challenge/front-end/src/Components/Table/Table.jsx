import { convertLength } from "@mui/material/styles/cssUtils";
import { useGlobal } from "../../Global/GlobalStateContext";
import GraficoInfo from "./GraficoInfo";
import ShowInfoUser from "./ShowInfoUser";
import { MainTable } from "./StyledTable";


export default function Table() {
    const { states } = useGlobal();


    console.log(states.user)



    const mostraInfoUser = states.user.userInfo && states.user.userInfo.map((user) => {
        // console.log("====================")
        // console.log(user)
        return (

            <ShowInfoUser User={user} />

        )
    })

    return (
        <MainTable>
            <table>
                <thead>
                    <tr>
                        <th>
                            first_name
                        </th>

                        <th>
                            last_name
                        </th>
                        <th>
                            participation
                        </th>
                        <th>
                            percent
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        states.user && mostraInfoUser
                    }
                </tbody>
            </table>

            <GraficoInfo />



        </MainTable>
    )
}




