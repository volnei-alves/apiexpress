import { Request, Response } from "express"
import { CreateUserModel, UsersAllModel } from "../models/userModel"

const getAll = async (req: Request, res: Response) => {
    const allUsers = await UsersAllModel()    
    res.json(allUsers)
}

const postCreateUser = async (req: Request, res: Response) => {
    const data = req.body    
    const allUser = await CreateUserModel(data)    
    res.json(allUser)
}


export {getAll, postCreateUser}