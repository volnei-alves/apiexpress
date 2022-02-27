import { Router } from "express";

const router = Router()

router.get('/', (req, res)=>{
    res.json({menssage: 'teste de rouuter'})
})




export default router