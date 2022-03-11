import { Router } from "express";
import { CreatePost, DeletePost, GetAllPosts, GetPost, UpdatePost } from "../controller/postsController";

const router = Router()

router.post('/', CreatePost)
router.get('/', GetAllPosts)
router.get('/:id', GetPost)
router.put('/:id', UpdatePost)
router.delete('/:id', DeletePost)

export default router