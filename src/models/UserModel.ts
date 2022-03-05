import db from "../services/prismaOrm"
import { user } from "../types/user.types"

export default class User {

    public async GetUsersAll() {
        const allUsers = await db.user.findMany()
        return allUsers
    }

    public async CreateUser(data: user) {
        try {
            const createUser = await db.user.create({
                data: {
                    email: data.email,
                    name: data.name
                }
            })
            return createUser
        } catch (error) {
            console.log(error);

            return error
        }
    }

    public async GetUser(id: string) {
        try {
            const userId = await db.user.findUnique({
                where: { id: id }
            })
            return userId
        } catch (error) {

        }
    }

    public async UpdateUser(id: string, dados: user) {
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

    public async DeleteUser(id: string) {
        try {
            const deleteUserId = await db.user.delete({
                where: { id: id }
            })
            return true
        } catch (error) {

            return false
        }
    }

}