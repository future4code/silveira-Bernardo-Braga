// import { useGlobal } from "../../Global/GlobalStateContext";

import { convertLength } from "@mui/material/styles/cssUtils";
import { useGlobal } from "../../Global/GlobalStateContext";
import { Delete, MainShowTable, Td, Tr } from "./StyledTable"

export default function ShowInfoUser(props) {
    const { requests } = useGlobal();







    // console.log(props.User.id)


    return (
        <Tr>
            <Td>{props.User.first_name}</Td>
            <Td>{props.User.last_name}</Td>
            <Td>{props.User.participation}</Td>
            <Td>{props.User.percent}</Td>
            <Td onClick={() => { requests.deleteUser(props.User.id) }}>deletar user</Td>

        </Tr>
    )
}