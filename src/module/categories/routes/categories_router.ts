import express ,{NextFunction, Request,Response,Router} from "express";
import { createCategoriesMiddleware, updateCategoriesMiddleware } from "../middlewares/categorey_middleware";
import { createCategoriesController, deleteCategoryController, getAllCategoriesController, updateCategoryController } from "../controller/categories_controller";
import { createServiceMiddleware, updateServiceMiddleware } from "../../services/middlewares/service_middleware";
import { createServiceController, deleteServiceController, getAllServiceController, updateServiceController } from "../../services/controller/service_controller";


const categoriesRouter=Router()
categoriesRouter.get("/",getAllCategoriesController)
categoriesRouter.post("/",createCategoriesMiddleware,createCategoriesController)
categoriesRouter.put("/:categoryId",updateCategoriesMiddleware,updateCategoryController)
categoriesRouter.delete("/:categoryId",deleteCategoryController) 
categoriesRouter.post("/:categoryId/service",createServiceMiddleware,createServiceController)
categoriesRouter.get("/:categoryId/service",getAllServiceController)
categoriesRouter.delete("/:categoryId/service/:serviceId",deleteServiceController)
categoriesRouter.put("/:categoryId/service/:serviceId",updateServiceMiddleware,updateServiceController)

export default categoriesRouter