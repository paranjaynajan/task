import { validationMiddleware } from "../../../middlewares/validaionmiddleware";
import { createUserSchema, loginUserSchema } from "./user_middleware_schema";



export const createUserMiddleware = validationMiddleware(createUserSchema,"body")
export const loginUserMiddleware = validationMiddleware(loginUserSchema,"body")