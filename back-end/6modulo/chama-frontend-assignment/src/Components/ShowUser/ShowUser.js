import React from "react";
import { useGlobal } from "../../Global/GlobalStateContext";
import InfoUser from "./InfoUser/InfoUser";
import ShowRepositories from "./ShowRepos/ShowRepositories";
import { MainShow, Repositories } from "./Styled";


export default function ShowUser() {
    const { states } = useGlobal()
    const user = states.user.data
    const repo = states.userRepos

    // console.log(repo);

    const mostraRepo = repo && repo.map((repo) => {
        // console.log(repo);
        return <ShowRepositories repo={repo} key={repo.name} />

    })

    return (
        <MainShow>
            {user && <InfoUser User={user} />}
            <Repositories>
                {user && mostraRepo}
            </Repositories>


        </MainShow>
    )
}



