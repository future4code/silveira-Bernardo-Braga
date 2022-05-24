import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }
`

export const MainContainer = styled.div`
    /* background: greenyellow; */

    height: 100%;
    width: 100%;

    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Form = styled.form ` 

    height: 100%;
    width: 100%;

    margin-top: 11px;
    /* background: blue; */
   
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input ` 
    
    margin-bottom:5px;
    
    width: 70%;
`

export const Button = styled.button `  

    margin-top:20px;
    border-radius: 6px;

    background-image: linear-gradient(to right, orange, yellow );
`

export const Headers = styled.div `  `


export const AddCommitContainer = styled.div ` 

    height: 100%;
    width: 100%; 

    display:flex;
`

export const PostsContainer = styled.div `

    height: 100%;
    width: 100%;
    
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const CommitContainer = styled.div `
    height: 100%;
    width: 97%;

    margin-right: 3px;

`



