import styled from "styled-components";


export const MainContainer = styled.div`
    background-color: gray;

    display: flex;

    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;


`

export const ContainerShowPizza = styled.div`
    background-color: green;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;
    height: 100%;

    margin: 5px;

    
`

export const Button = styled.button`

    margin-top:20px;
    border-radius: 6px;
    background-image: linear-gradient(to right, orange, yellow );
`

// export const ContainerPizza = styled.div`
//     background-color: yellow;

//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;


//     margin: 5px;
// `