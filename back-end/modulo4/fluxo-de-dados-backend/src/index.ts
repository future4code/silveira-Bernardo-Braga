import express,{Request,response,Response} from 'express';
import cors   from 'cors';
import {Produtos, Produto} from './data'


    const app = express();

    app.use(express.json())
    app.use(cors())
    
    function getLastId(array:Array<Produto>):number{
        let lastId:number = 0 

        for (let i = 0; i < array.length ; i++) {
            lastId = Number(array[i].id)
        
        }

        return lastId
    }

    // function isEmpty(obj:object):boolean {
    //     // se for true esta vazio , se nao retorna false
    //     if ()
    // }
    app.get('/test',(request:Request,response:Response) => {
        response.status(200).send('tudo certo com o teste')
    })

    
    app.post('/listaAdd',(req:Request,res:Response) => {
        try{
            const body = req.body
            Produtos.push(body)


            res.status(201).send(Produtos)
        }catch (err:any){
            console.log(err);
        }
    })

    app.get('/produtos',(req:Request,res:Response) => {
        res.status(200).send(Produtos)
    })

    app.post('/editaPrice/:id/:price',(req:Request,res:Response) => {
        const idProduct = req.params.id
        const pricePr = req.params.price
        Produtos.filter((produt)=>{
            if (produt.id == idProduct){
                produt.price = Number(pricePr)
            }
        })
    
        res.status(200).send(Produtos)
    })

    app.delete('/delProduto/id',(req:Request,res:Response)=>{
        const idForDelete = req.params.id 

        Produtos.filter((pr) => {
            if (pr.id === idForDelete) {
                return {}
            }
            return pr
        })
        res.status(200).send(Produtos)
    })



    app.listen(3003, () => {
        console.log('Running in http://localhost:3003')
    })