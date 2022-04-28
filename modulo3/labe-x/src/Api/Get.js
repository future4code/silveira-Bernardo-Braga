import axios from 'axios';

const autorization = 'bernardo-braga-silveira'

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${autorization}/`


export default function Gets () {

    const getTrips = async () =>{
        try{

            const response = await axios.get(`${url}trips`);
            console.log(response.data.trips);
            console.log('deu certo')
            return response.data.trips;

        }catch(err){

            console.log(err.data)

        }
    }

    const getTripDetail = async () => {

        try {

            const response = await axios.get(`${url}trip/:id`)
            console.log(response.data.trip);
            console.log('deu certo')

        } catch (err) {
        
            console.log('deu erro')
            console.log(err.data)
        
        }

    }


} 
