import axios from 'axios'

    
    const autorization = 'bernardo-braga-silveira'

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${autorization}/`

    const header = 'Content-Type: application/json'

    export const delDeleteTrip = async (id) => {
        try {

            const response = await axios.delete(`${url}trips/${id}`,header)
            console.log(response.data);
            console.log('deu certos');

        } catch (err) {
            
            console.log('deu erro');
            console.log(err.message);
            
        }

    }
