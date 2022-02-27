import db from "../services/prismaOrm"
import { user } from "../types/user.types"

const UsersAllModel = async () => {
    const allUsers = await db.user.findMany()
    return allUsers
}

const CreateUserModel = async (data: user) => {
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

export { UsersAllModel, CreateUserModel }