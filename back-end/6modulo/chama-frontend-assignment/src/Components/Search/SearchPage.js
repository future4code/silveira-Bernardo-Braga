
import { useForm } from '../../Hooks/UseForm'
import { useGlobal } from "../../Global/GlobalStateContext";
import { Button, Form, Input, MainInput } from './styled';


export default function SearchPage() {
    // const { states, setters } = useContext(GlobalStateContext)
    const { requests } = useGlobal();
    const { form, onChange, cleanField } = useForm({ userName: '' })

    const doLogin = async (e) => {
        e.preventDefault(true)
        console.log(form.userName);
        await requests.getUser(form.userName)
        cleanField();
    }
    return (
        <MainInput>


            <Form onSubmit={doLogin}>
                <Input name="userName"
                    value={form.userName}
                    onChange={onChange}
                    placeholder={'USER NAME'}
                    forHtml="userName"
                    required />
                <Button> Search User</Button>
            </Form>
        </MainInput>
    )
}



    // Search page: the user types a Github username in a form.Once the form is submitted, the data is fetched and presented in the UI.You can come up showing whatever you want, though it is required to show the user profile metadata(example: avatar picture, name, email, bio, etc.) and his repositories metadata info(example: name, description, URL, etc.)

    // History page: the page must show all previous terms searched by the user, sorted by timestamp.The most recent ones must be on the top.The user must be able to click in the history item and search again using the searched term.
