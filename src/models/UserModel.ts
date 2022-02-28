import db from "../services/prismaOrm"
import { user } from "../types/user.types"

export default class User{
    
    constructor(){

    }

    public async GetUsersAll(){
        const allUsers = await db.user.findMany()
        return allUsers
    }

    public async CreateUser(data: user){
        try {
            const createUser = await db.user.create({            
                data: {
                    email: data.email,
                    name: data.name
                }
            })
            return createUser
        } catch (error) {
            return { menssage: "error to the create User" }
        }
    }

}