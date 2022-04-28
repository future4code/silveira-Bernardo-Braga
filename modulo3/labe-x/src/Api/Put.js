import axios from 'axios'


    
    const autorization = 'bernardo-braga-silveira'

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${autorization}/`

    const header = 'Content-Type: application/json'

    export const putDecideCandidate = async (tripId,candidateId,token) => {
        
        try {
            const headers = {
                'Content-Type': 'application/json',
                'auth':token
            }

            const response = await axios.put(`${url}trips/${tripId}/candidates/${candidateId}/decide`);
            console.log(response.data);
            console.log('deu certo put');

        } catch (err) {
            console.log(err.message);
            console.log('deu erro');
            
        }

    }
