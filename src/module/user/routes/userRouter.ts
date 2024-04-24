import express ,{NextFunction, Request,Response,Router} from "express";
import { creatUserController, loginUserController } from "../controller/unverified_controller";
import { createUserMiddleware, loginUserMiddleware } from "../middlewares/user_middleware";

const userRouter=Router()
userRouter.post("/signup",createUserMiddleware,creatUserController)
userRouter.post("/signin",loginUserMiddleware,loginUserController)
export default userRouter 