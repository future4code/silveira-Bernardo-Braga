// import { useGlobal } from "../../Global/GlobalStateContext";

import { convertLength } from "@mui/material/styles/cssUtils";
import { useGlobal } from "../../Global/GlobalStateContext";
import { Delete, MainShowTable } from "./StyledTable"

export default function ShowInfoUser(props) {
    const { requests } = useGlobal();






    const body = {
        id: props.User.id,
        firstName: props.User.first_name,
        lastName: props.User.last_name,
    }
    console.log(body)


    return (
        <MainShowTable>
            <td>{props.User.first_name}</td>
            <td>{props.User.last_name}</td>
            <td>{props.User.participation}</td>
            <td>{props.User.percent}</td>
            <td onClick={() => { requests.deleteUser(body) }}>deletar user</td>

        </MainShowTable>
    )
}