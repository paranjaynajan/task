
import { validationMiddleware } from "../../../middlewares/validaionmiddleware";

import { serviceSchema, updateServiceSchema } from "./service_middleware_schema";


export const createServiceMiddleware = validationMiddleware(serviceSchema ,"body")
export const updateServiceMiddleware = validationMiddleware(updateServiceSchema,"body")
