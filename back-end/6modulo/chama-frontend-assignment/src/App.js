
import GlobalState from './Global/GlobalState';
import Router from './Router/Router';




export default function App() {
	return (
		<GlobalState>
			<Router /> 
		</GlobalState>
	);
}



/*  USAR O USE FORM :


import {useForm} from '../../Hooks/UseForm'
import { useGlobal } from "../../Global/GlobalStateContext";


export default function Header (){
    // const { states, setters } = useContext(GlobalStateContext)

    const {requests} = useGlobal();

    const {form,onChange,cleanField} = useForm({firstName:'',lastName:'',participation:''})

    const doLogin = async e => {

        e.preventDefault(true)
        const body = {
				"firstName":form.firstName,
				"lastName":form.lastName,
				"participation":form.participation
			}

        await requests.postUser(body)

        cleanField();

    }
    return (
        <MainHeader>
            <Form onSubmit={doLogin}  >
                <Input
                    name="firstName"
                    value={form.firstName} 
                    onChange={ onChange }
                    placeholder={'First name'}
                    forHtml="firstName"
                    required

                />
                <Input
                    name="lastName"
                    value={form.lastName} 
                    onChange={ onChange }
                    placeholder={'Last Name'}
                    type="lastName"
                    required
                />
                <Input
                    name="participation"
                    value={form.participation} 
                    onChange={ onChange }
                    placeholder={'Participation'}
                    type="participation"
                    required
                />
                <Button> Post Participation</Button>
            </Form>
        </MainHeader>
    )
} 


*/