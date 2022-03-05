import 'dotenv/config' 
import express,{ Application } from "express";  
import cors from "cors";
import helmet from "helmet";

import router from './routes';

const app: Application = express()
const port: Number = 3000

app.use(helmet())
app.use(cors());
app.use(express.json())
app.use(router)


app.listen(port, ()=>{
    console.log(`connect successfully on port ${port}`)
})
