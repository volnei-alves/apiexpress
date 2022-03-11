import 'dotenv/config' 
import express,{ Application } from "express";  
import cors from "cors";
import helmet from "helmet";

import users from './routes/users';
import posts from './routes/users';

const app: Application = express()
const port: Number = 3000

app.use(helmet())
app.use(cors());
app.use(express.json())
app.use("/api/v1/users", users)
app.use("/api/v1/posts", posts)


app.listen(port, ()=>{
    console.log(`connect successfully on port ${port}`)
})
