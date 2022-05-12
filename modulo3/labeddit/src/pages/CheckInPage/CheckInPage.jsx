import React  from 'react';//{useState, useEffect}
import { useNavigate } from "react-router-dom";

import { useForm } from '../../hooks/useForm'
import { useGlobal } from '../../context/GlobalStateContext';
import { goToHomePage } from '../../routes/coordinator';  //goToPage, 

import { MainContainer,Form,Input,Button } from '../../styles/styled';

export const CheckInPage = props => {
    const {form,onChange,cleanField} = useForm({username:'', email:'', password:''})
    const {request} = useGlobal()
    const navigate = useNavigate();


    const doCheckIn = e => {
        
        e.preventDefault()
        request.postCheckIn(form,navigate,'/feed')

        cleanField();
       

    }

    return (
        <MainContainer>
            <Button onClick={() => { goToHomePage(navigate)} }>voltar</Button>
            <h1> Ola, bem vindo ao LabEddit ;)</h1>
            <Form onSubmit={doCheckIn}  >
                <Input 
                    name="email"
                    value={form.email} 
                    onChange={ onChange }
                    placeholder={'digite o seu email'}
                    forHtml="email"
                    required

                /><Input 
                    name="username"
                    value={form.username} 
                    onChange={ onChange }
                    placeholder={'digite o seu nickname'}
                    
                    required

                />
                <Input
                    name="password"
                    value={form.password} 
                    onChange={ onChange }
                    placeholder={'digite o sua Senha'}
                    type="password"
                    required
                />
                <Button> cadastrar</Button>
            </Form>
        </MainContainer>
    );
}