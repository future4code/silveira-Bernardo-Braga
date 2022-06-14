import axios from 'axios'





type user = {
    id: string;
    name: string;
    email: string;
}




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
    const resposta = response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    })
    return resposta

}

async function main3(title: string, content: string, date: number): Promise<void> {

    await axios.put('https://labenews.herokuapp.com/news', {
        title: title,
        content: content,
        date: date
    });
}


main()
main2()





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