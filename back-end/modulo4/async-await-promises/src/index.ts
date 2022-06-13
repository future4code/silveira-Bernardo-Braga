import axios from 'axios'










async function main(): Promise<any> {
    try {


        console.log('passou aqui');
        const response = await axios.get('https://labenews.herokuapp.com/subscribers')
        return response.data

    } catch (err: any) {
        console.log('deu error');
    }


}

const main2 = async (): Promise<any> => {

    console.log('passou aqui');
    const response = await axios.get('https://labenews.herokuapp.com/subscribers')
    return response.data

}


main()





// import express from "express";
// import cors from "cors"

// import { AddressInfo } from "net";

// const app = express();

// app.use(express.json());
// app.use(cors());







// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//         const address = server.address() as AddressInfo;
//         console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//         console.error(`Failure upon starting server.`);
//     }
// });;