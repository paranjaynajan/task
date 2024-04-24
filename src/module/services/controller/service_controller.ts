import express ,{Request,Response,Router} from "express";
import { CustomError } from "../../../middlewares/custom_error";
import { createCategoryService, deleteService, getAllService, updateService } from "../services/service_service";

export const createServiceController=async(req:Request,res:Response):Promise<Response>=>{
    try{
        const id = req.params.categoryId;
        const service= await createCategoryService(id,req.body);
       return res.status(201).send({message:"Service Created",...service})

    }catch(error){
        if(error instanceof CustomError){
            return res.status(error.statusCode).send({message: error.message})
        }
        return res.status(500).send({message: error})

    }
}


export const getAllServiceController=async(req:Request,res:Response):Promise<Response>=>{
    try{
     const allServices= await getAllService();
    return res.status(200).send({message:"All Categories ",data:allServices})

    }catch(error){
        if(error instanceof CustomError){
            return res.status(error.statusCode).send({message: error.message})
        }
        return res.status(500).send({message: error})

    }
}

export const updateServiceController=async(req:Request,res:Response):Promise<Response>=>{
    try{
        if(!req.body) throw new CustomError(404 ,"Need feilds to update",)
        const serviceId =req.params.serviceId;
        const categoryId =req.params.categoryId;
        const serviceData= await updateService(categoryId,serviceId,req.body);
       return res.status(200).send({message:"Category updated ",data:serviceData})

    }catch(error){
        if(error instanceof CustomError){
            return res.status(error.statusCode).send({message: error.message})
        }
        return res.status(500).send({message: error})

    }
}

export const deleteServiceController=async(req:Request,res:Response):Promise<Response>=>{
    try{
        const categoreyId =req.params.categoryId;
        const serviceId = req.params.serviceId;
        const categorey= await deleteService(categoreyId,serviceId);
       return res.status(200).send({message:categorey})

    }catch(error){
        if(error instanceof CustomError){
            return res.status(error.statusCode).send({message: error.message})
        }
        return res.status(500).send({message: error})

    }
}