import { NextFunction,Response,Request } from "express";
import { ZodSchema } from "zod";

export const validationMiddleware = (schema:ZodSchema,dataKey:any) => (req:Request,res:Response,next:NextFunction)=>{
    try{
      let data:any
      if(dataKey === "body"){
        data =req.body;
      }else if(dataKey === "params"){
        data=req.params;
      }else if(dataKey === "query"){
        data=req.query
      }else{
        throw new Error("Invalid dataKey")
      }
      console.log(req.body,"data")
        schema.parse(data)
        next()
    }catch(err){
        res.status(400).send(err)
    }
}