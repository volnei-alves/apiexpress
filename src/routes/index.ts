import { Router } from "express";
import {getAll, postCreateUser} from "../controller/usersController";
import db from "../services/prismaOrm";


const router = Router()

router.get('/', getAll)
router.post('/', postCreateUser)



export default router
