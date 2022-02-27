import 'dotenv/config' 
import express,{ Application, Request, Response} from "express";  

import router from './routes';

const app: Application = express()
const port: Number = 3000

app.use(router)

app.listen(port, ()=>{
    console.log(`connect successfuully on port ${port}`)
})