import express ,{Request,Response,Router} from "express";
import { createUserService, loginUserService } from "../services/unverified_service";
import { CustomError } from "../../../middlewares/custom_error";

export const creatUserController=async(req:Request,res:Response):Promise<Response>=>{
    try{
        const user= await createUserService(req.body);
       return res.status(201).send({message:"User Created",...user})

    }catch(error){
        if(error instanceof CustomError){
            return res.status(error.statusCode).send({message: error.message})
        }
        return res.status(500).send({message: error})

    }
}


export const loginUserController=async(req:Request,res:Response):Promise<Response>=>{
    try{
        const user= await loginUserService(req.body);
       return res.status(200).send({message:"User logged in",...user})

    }catch(error){
        if(error instanceof CustomError){
            return res.status(error.statusCode).send({message: error.message})
        }
        return res.status(500).send({message: error})

    }
}