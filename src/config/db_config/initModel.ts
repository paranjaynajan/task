import { Sequelize } from "sequelize";
import { initUserModel } from "../../module/user/models/userModel";
import { initCategoriesModel } from "../../module/categories/models/categories_model";
import { ServiceModel, initServiceModel } from "../../module/services/models/service_model";
import { ServiceOptionsModel, initServiceOptionsModel } from "../../module/services/models/service_option_model";




export const  initModels = (sequelize:Sequelize) => {
initUserModel(sequelize);
initCategoriesModel(sequelize);
initServiceModel(sequelize)
initServiceOptionsModel(sequelize)
// ServiceModel.hasMany(ServiceOptionsModel, { foreignKey: 'serviceId' });
// ServiceOptionsModel.belongsTo(ServiceModel, { foreignKey: 'serviceId' });
} 