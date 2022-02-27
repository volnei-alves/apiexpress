import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const prisma = new PrismaClient()

const router = Router()

router.get('/', async (req, res) =>{
    const allUsers = await prisma.user.findMany()
    res.json(allUsers)
})

router.post('/', async (req, res)=>{
    const data = req.body    
    try {
    const createUser = await prisma.user.create({
        data:{
            email: data.email,
            name: data.name
        }
    })     
        res.json(createUser)
    } catch (error) {
        res.status(406).json(error)
    }
    
})



export default router