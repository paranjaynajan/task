import express ,{Request,Response,Router} from "express";
import { CustomError } from "../../../middlewares/custom_error";
import { createCategoreyService, deleteCategoryService, getAllCategoriesService, updateCategoryService } from "../services/categorey_service";

export const createCategoriesController=async(req:Request,res:Response):Promise<Response>=>{
    try{
        const user= await createCategoreyService(req.body);
       return res.status(201).send({message:"Category Created",...user})

    }catch(error){
        if(error instanceof CustomError){
            return res.status(error.statusCode).send({message: error.message})
        }
        return res.status(500).send({message: error})

    }
}


export const getAllCategoriesController=async(req:Request,res:Response):Promise<Response>=>{
    try{
        const allCategorey= await getAllCategoriesService();
       return res.status(200).send({message:"All Categories ",data:allCategorey})

    }catch(error){
        if(error instanceof CustomError){
            return res.status(error.statusCode).send({message: error.message})
        }
        return res.status(500).send({message: error})

    }
}

export const updateCategoryController=async(req:Request,res:Response):Promise<Response>=>{
    try{
        const id =req.params.categoryId;
        const allCategorey= await updateCategoryService(id,req.body);
       return res.status(200).send({message:"Category updated ",data:allCategorey})

    }catch(error){
        if(error instanceof CustomError){
            return res.status(error.statusCode).send({message: error.message})
        }
        return res.status(500).send({message: error})

    }
}

export const deleteCategoryController=async(req:Request,res:Response):Promise<Response>=>{
    try{
        const id =req.params.categoryId;
        const categorey= await deleteCategoryService(id);
       return res.status(200).send({message:"Category Deleted ",data:categorey})

    }catch(error){
        if(error instanceof CustomError){
            return res.status(error.statusCode).send({message: error.message})
        }
        return res.status(500).send({message: error})

    }
}