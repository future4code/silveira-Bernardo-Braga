import express, {Request,Response} from 'express'
import cors from 'cors'
import e from 'express';

const app = express();

app.use(express.json());
app.use(cors());

    type Afazer ={
        id:number,
        userId:number,
        title:string,
        completed:boolean
    }

    const afazeres:Array<Afazer> = [
        {
            id: 1,
            userId: 3,
            title: 'buscar mercado',
            completed: true
        },{
            id: 2,
            userId: 1,
            title: 'fazer exercicios fisicos',
            completed: true
        },{
            id: 3,
            userId: 2,
            title: 'ir para a praia',
            completed: false
        },
    ]

    app.post ('/post',(req:Request,res:Response) => {
        
        if(!req.body.title && !req.body.userId){ res.status(401).send('informações nao completas')}
        
        afazeres.push(req.body)

        
        res.status(200).send(afazeres)
    })

        app.post ('/changeStatus/:id',(req:Request,res:Response) => {
            const id = Number(req.params.id)
            const changeStatus = afazeres.filter((af) => {
                if (af.id === id){
                    af.completed = !af.completed
                }
            })
            
            
            res.status(200).send(afazeres)
    })

    app.get('/ping',(req:Request, res:Response) => {
        const done:any = afazeres.filter((feito) => {
            if (feito.completed === false) {
                return feito

            }

        })
        res.send(done)
    })


    app.delete ('/delete/:id',(req:Request,res:Response) => {
        const id = Number(req.params.id)

        const deleted = afazeres.map((af) => {
            if (af.id == id){
                return {}
            }
            return af
        })
        
        res.status(200).send(deleted)
    })

    app.get ('/iduser/:id',(req:Request,res:Response) => {

        const idUser = Number(req.params.id)
        // let tarefaUser:Array<Afazer> = []
        const tarefasUser = afazeres.map ((af) => {
            if(af.userId == idUser){
                return af
                
            }
        })
        res.status(200).send(tarefasUser)

    })





    app.listen(3003, () => {
        console.log('Running in http://localhost:3003')
    })


// link da API documentada : https://documenter.getpostman.com/view/20350153/Uz5DqxJa