import db from "../services/prismaOrm"
import { user } from "../types/user.types"

export async function AddUser(email: string, name: string) {
    try {
        const createUser = await db.user.create({
            data: {
                email: email,
                name: name
            }
        })
        return createUser
    } catch (error) {
        return error
    }
}

export async function GetUsers() {

    const allUsers = await db.user.findMany()

    return allUsers
}

export async function GetUserId(id: string) {

    try {
        const userId = await db.user.findUnique({
            where: { id: id }
        })
        return userId
    } catch (error) {
        console.log(error);

    }
}

export async function UpdateUserId(id: string, dados: user) {

    try {
        const updateUser = await db.user.update({
            where: { id: id || undefined },
            data: dados
        })
        return updateUser
    } catch (error) {
        console.log(error);
        return { mensage: "Error of update data the User" }
    }
}

export async function DeleteUserId(id: string) {
    
    try {
        const deleteUserId = await db.user.delete({
            where: { id: id }
        })
    } catch (error) {
        return false
    }
}


