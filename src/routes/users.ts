import { Router } from "express";
import { CreateUser, DeleteUser, GetUser, GetUsersAll, UpdateUser } from "../controller/usersController";

const router = Router()

router.post('/', CreateUser)
router.get('/', GetUsersAll)
router.get('/:id', GetUser)
router.put('/:id', UpdateUser)
router.delete('/:id', DeleteUser)

export default router
