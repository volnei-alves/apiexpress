import { Request, Response } from "express"

import User from "../models/UserModel"


const postCreateUser = async (req: Request, res: Response) => {
    const allUser = await new User().CreateUser(req.body )    
    res.json(allUser)
}

const getAll = async (req: Request, res: Response) => {
    const allUsers = await new User().GetUsersAll()   
    res.json(allUsers)
}

const getUserId= async (req: Request, res: Response) => {
    const responseUser= await new User().GetUser(req.params.id)   
    res.json(responseUser)
}

const updateUserId= async (req: Request, res: Response) => {
    const responseUser= await new User().UpdateUser(req.params.id, req.body)   
    res.json(responseUser)
}


const deleteUser= async (req: Request, res: Response) => {
   const responsedelete = await new User().DeleteUser(req.params.id)  
  
   if(responsedelete === false){
     res.json({mensage: 'failed to deleted User'})
   }else{
       res.json({mensage: 'User deleted of success'})       
   }
     
}


export {getAll,getUserId,updateUserId,deleteUser, postCreateUser}