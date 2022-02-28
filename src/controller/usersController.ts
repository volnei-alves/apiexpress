import { Request, Response } from "express"

import User from "../models/UserModel"

const getAll = async (req: Request, res: Response) => {
    const allUsers = await new User().GetUsersAll()   
    res.json(allUsers)
}

const postCreateUser = async (req: Request, res: Response) => {
    const data = req.body    
    const allUser = await new User().CreateUser(data)    
    res.json(allUser)
}


export {getAll, postCreateUser}