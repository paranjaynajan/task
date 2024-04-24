import express ,{Request,Response,Router} from "express";
import userRouter from "../module/user/routes/userRouter";
import { auth } from "../middlewares/token_veification";
import categoriesRouter from "../module/categories/routes/categories_router";



const mainRouter=Router()
mainRouter.use("/",userRouter)
mainRouter.use("/category",auth,categoriesRouter)


export default mainRouter