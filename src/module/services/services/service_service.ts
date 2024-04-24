import { CustomError } from "../../../middlewares/custom_error";
import { CategoriesModel } from "../../categories/models/categories_model";
import { Icategories } from "../../categories/utils/categories_interface";
import { UserModel } from "../../user/models/userModel";
import { ServiceModel } from "../models/service_model";
import { ServiceOptionsModel } from "../models/service_option_model";
import { IService, IserviceModel } from "../utils/service_interface";

export const createCategoryService  = async (
  id:string,
  service: IService
): Promise<IserviceModel> => {
  const categoreyFound = await CategoriesModel.findOne({
    where: { id: id },
  });
  if (categoreyFound==null) {
    throw new CustomError(404, "Category not found");
  }
  const serviceFound = await ServiceModel.findOne({
    where: { name: service.name.toLowerCase() },
  });
  if (serviceFound) {
    throw new CustomError(409, "Service already exists");
  }
  
  const serviceCreated = await ServiceModel.create({...service,categoryId:categoreyFound.dataValues.id});

  const serviceId=serviceCreated.dataValues.id
  
 const serviceOptions= service.options.map((e)=>{
    return {...e,serviceId: serviceId}
  })
  const serviceWithOptions = await ServiceOptionsModel.bulkCreate(serviceOptions)
   return serviceCreated;
};

export const getAllService = async (): Promise<IserviceModel[]> => {
  const serviceFound= await ServiceModel.findAll({include:[{model:ServiceOptionsModel,required:false}]});
  if (!serviceFound) {
    throw new CustomError(404, "No Services Found");
  } else {

    return serviceFound;
  }
};

export const updateService = async (categoryId: string,serviceId:string ,body: any):Promise<IserviceModel[]> => {
  const categoreyFound = await CategoriesModel.findOne({
    where: { id: categoryId},
  });
  if (categoreyFound==null) {
    throw new CustomError(404, "Category not found");
  }
  const serviceFound = await ServiceModel.findOne({
    where: { id: serviceId },
  });
  if (!serviceFound) {
    throw new CustomError(404, "No Services Found");
  }
    const { name, type, options } = body;
    await serviceFound.update({ name, type });
    if (options && options.length > 0) {
      for (const option of options) {
        const { duration, price ,type} = option;
        console.log(serviceFound.dataValues.id,duration,type ,"here")
        const [serviceOption, created] = await ServiceOptionsModel.upsert({
          serviceId: serviceFound.dataValues.id,
          duration,
          price,
          type
        });
      }
    }
    const service =await getAllService()
    return service
  }; 

export const deleteService = async (categoryId:string,serviceId: string): Promise<string> => {
  const categoreyFound = await CategoriesModel.findOne({
    where: { id: categoryId},
  });
  if (categoreyFound==null) {
    throw new CustomError(404, "Category not found");
  }
  const serviceFound = await ServiceModel.findOne({
    where: { id: serviceId },
  });
  if (!serviceFound) {
    throw new CustomError(404, "No Services Found");
  }
      await serviceFound.destroy();
      return "service deleted" ;

  };
