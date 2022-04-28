import axios from "axios";

export default function Post () {

    const autorization = 'bernardo-braga-silveira'

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${autorization}/`
    const header = 'Content-Type: application/json'

    const postCreateTrip = async (name,planet,date,description,durationInDays) => {
        try {
            const body = {
                "name": name,
                "planet": planet,
                "date":date,
                "description":description,
                "durationInDays":durationInDays
            }
            const response = await axios.post(`${url}trips`,body,header)
            console.log(response.data);


        } catch (err) {
            console.log(err.data);
            console.log('deu erro');
        }
    }

    const postApplyTrip = async (id,name,age,applicationText,profession,country) => {
        try {
            const body = {
                "name": name,
                'age': age,
                'applicationText': applicationText,
                'profession':profession,
                'country':country
            }
            const response = await axios.post(`${url}trips/${id}/apply`,body,header)

        } catch (err) {
            console.log('deu erro');
            console.log(err.data);
        }
    }

    const postSignup = async (email,password) => {
        try {

            const body = {
                'email':email,
                'password':password
            }
            const response = await axios.post(`${url}signup`,body,header)

        } catch (err) {
            console.log('deu erro');
            console.log(err.data);
        } 
    }

    const postLogin = async (email,password) => {
        try {
        
            const body = {
                'email':email,
                'password':password
            }
            const response = await axios.post(`${url}login`,body,header)

        } catch (err) {
            console.log('deu erro');
            console.log(err.data);
        }
    }

}