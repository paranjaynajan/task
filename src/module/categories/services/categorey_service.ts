import { CustomError } from "../../../middlewares/custom_error";
import { ServiceModel } from "../../services/models/service_model";
import { UserModel } from "../../user/models/userModel";
import { CategoriesModel } from "../models/categories_model";
import { Icategories, IcategoriesModel } from "../utils/categories_interface";

export const createCategoreyService = async (
  categorey: Icategories
): Promise<IcategoriesModel> => {
  const categoreyFound = await CategoriesModel.findOne({
    where: { name: categorey.name.toLowerCase() },
  });
  if (categoreyFound) {
    throw new CustomError(409, "Categories Already Exists");
  }
  const categoreyCreated = await CategoriesModel.create({ ...categorey });

  return categoreyCreated.dataValues;
};

export const getAllCategoriesService = async (): Promise<Icategories[]> => {
  const categoreyFound = await CategoriesModel.findAll({include:[{model:ServiceModel}]});
  if (!categoreyFound) {
    throw new CustomError(404, "No Categories Found");
  } else {
    return categoreyFound;
  }
};

export const updateCategoryService = async (id: string, body: any): Promise<Icategories[]> => {
    const categoryFound = await CategoriesModel.findOne({ where: { id: id } });
    
    if (!categoryFound) {
      throw new CustomError(404, "No Category Found");
    } else {
    const { name, type, Services } = body;
    await categoryFound.update({ name});
    if (Services && Services.length > 0) {
      for (const option of Services) {
        const { name ,type} = option;
        const [serviceOption, created] = await ServiceModel.upsert({
          categoryId: categoryFound.dataValues.id,
          name,
          type
        });
      }
    }
  
    const updatedCat =await getAllCategoriesService()
      return updatedCat; 
    }
  };

  export const deleteCategoryService = async (id: string): Promise<CategoriesModel> => {

    const associatedServices = await ServiceModel.findOne({ where: { categoryId: id } });

    if (associatedServices) {
      throw new CustomError(400, "Category cannot be deleted as it is associated with one or more services");
    } else {
     
      const categoryFound = await CategoriesModel.findOne({ where: { id: id } });
  
      if (!categoryFound) {
        throw new CustomError(404, "No Category Found");
      }
  

      await categoryFound.destroy();
  

      return categoryFound;
    }
  };
