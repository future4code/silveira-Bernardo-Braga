// import { useGlobal } from "../../Global/GlobalStateContext";

import { MainShowTable } from "./StyledTable"

export default function ShowInfoUser(props) {
    // const { states } = useGlobal();


    console.log(props.User)






    return (
        <MainShowTable>
            <td>{props.User.first_name}</td>
            <td>{props.User.last_name}</td>
            <td>{props.User.participation}</td>
            <td>{props.User.percent}</td>


        </MainShowTable>
    )
}