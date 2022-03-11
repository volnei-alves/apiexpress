import {Request, Response} from "express"

const CreatePost = async (req: Request, res: Response)=>{
    return "creste Posts"
}

const GetPost = async (req: Request, res: Response)=>{
    return " post Id"
}

const GetAllPosts = async (req: Request, res: Response)=>{
    return " reurn posts"
}

const UpdatePost = async (req: Request, res: Response)=>{
    return "Post Updated"
}

const DeletePost = (req: Request, res: Response)=>{
    return "Post deleted"
}

export {CreatePost, GetPost, GetAllPosts, UpdatePost, DeletePost}