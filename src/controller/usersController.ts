import { Request, Response } from "express"

import {CreateUser, DeleteUser, GetUser, GetUsersAll, UpdateUser} from "../models/UserModel"


const postCreateUser = async (req: Request, res: Response) => {
    const {email, name} = req.body

    const allUser = await CreateUser(email, name)

    res.json(allUser)
}

const getAll = async (req: Request, res: Response) => {

    const allUsers = await GetUsersAll()   

    res.json(allUsers)
}

const getUserId= async (req: Request, res: Response) => {

    const responseUser= await GetUser(req.params.id)   

    res.json(responseUser)
}

const updateUserId= async (req: Request, res: Response) => {

    const responseUser= await UpdateUser(req.params.id, req.body)   

    res.json(responseUser)
}

const deleteUser= async (req: Request, res: Response) => {
   const responsedelete = await DeleteUser(req.params.id)  
  
   if(responsedelete === false){
     res.json({mensage: 'failed to deleted User'})
   }else{
       res.json({mensage: 'User deleted of success'})       
   }
     
}


export {getAll,getUserId,updateUserId,deleteUser, postCreateUser}