import { Router } from "express";
import {
    deleteUser, 
    getAll, 
    getUserId, 
    postCreateUser, 
    updateUserId
} from "../controller/usersController";

const router = Router()

router.post('/', postCreateUser)
router.get('/', getAll)
router.get('/:id', getUserId)
router.put('/:id', updateUserId)
router.delete('/:id', deleteUser)

export default router
