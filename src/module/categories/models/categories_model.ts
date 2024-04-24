import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";
import { ServiceModel } from "../../services/models/service_model";
export class CategoriesModel extends Model {
    public id!: string;
    public name!: string

  }
export const initCategoriesModel=(sequelize:Sequelize):void=>{
  CategoriesModel.init({
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue:UUIDV4,
          comment: 'Auto increment primary key',
        },
       name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        }  
      },
      {
        sequelize,
        modelName: 'Categories',
      })
   
}
