
import { validationMiddleware } from "../../../middlewares/validaionmiddleware";
import { categoriesSchema, updateCategoriesSchema } from "./categories_middleware_schema";


export const createCategoriesMiddleware = validationMiddleware(categoriesSchema,"body")
export const updateCategoriesMiddleware = validationMiddleware(updateCategoriesSchema,"body")