import { CustomError } from "../../../middlewares/custom_error";
import { createUserSchema } from "../middlewares/user_middleware_schema";
import { UserModel } from "../models/userModel";
import { createAccessToken } from "../utils/token_service";
import { Isignin, Isignup, IuserModel } from "../utils/user_interface";



export const createUserService=async(user:Isignup):Promise<{accessToken:string}>=>{
    const userFound = await UserModel.findOne({where:{email:user.email.toLowerCase()}})
    if(userFound){
        throw new CustomError(409, "User Already Exists")
    }
    const userCreated = await UserModel.create({...user})
    const  accessToken = await createAccessToken(userCreated.dataValues.email)
 
     return {accessToken:accessToken};
} 


export const loginUserService= async(user:Isignin):Promise<{accessToken:string}>=>{
    const userFound = await UserModel.findOne({where:{email:user.email.toLowerCase()}})
    if(!userFound){
        throw new CustomError(404, "User Non Found")
    }
    if(user.password===userFound.password){
        const  accessToken = await createAccessToken(userFound.dataValues.email)
        return {accessToken:accessToken};
    }else{
        throw new CustomError(409, "Invalid Criedntails")
    }
    }
