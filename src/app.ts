import express,{application, Application, Request, Response} from "express";  

const app: Application = express()
const port: Number = 3000


app.get('/', (req: Request, res: Response) =>{
    res.send('hello word')
})

app.listen(port, ()=>{
    console.log(`connect successfuully on port ${port}`)
})