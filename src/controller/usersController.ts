import { Request, Response } from "express"

import {AddUser,  DeleteUserId,  GetUserId,  GetUsers, UpdateUserId, } from "../models/UserModel"


const CreateUser = async (req: Request, res: Response) => {
    const {email, name} = req.body

    const response = await AddUser(email, name)

    res.json(response)
}

const GetUsersAll = async (req: Request, res: Response) => {

    const allUsers = await GetUsers()   

    res.json(allUsers)
}

const GetUser= async (req: Request, res: Response) => {

    const responseUser= await GetUserId(req.params.id)   

    res.json(responseUser)
}

const UpdateUser= async (req: Request, res: Response) => {

    const responseUser= await UpdateUserId(req.params.id, req.body)   

    res.json(responseUser)
}

const DeleteUser= async (req: Request, res: Response) => {
   const responsedelete = await DeleteUserId(req.params.id)  
  
   if(responsedelete === false){
     res.json({mensage: 'failed to deleted User'})
   }else{
       res.json({mensage: 'User deleted of success'})       
   }
     
}


export {CreateUser, GetUser, GetUsersAll, UpdateUser, DeleteUser}