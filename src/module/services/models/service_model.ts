import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";
import { CategoriesModel } from "../../categories/models/categories_model";

export class ServiceModel extends Model {
    public id!: string;
    public categoryId!:string;
    public name!: string;
    public type!: string[];


  }
export const initServiceModel=(sequelize:Sequelize):void=>{
  ServiceModel.init({
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue:UUIDV4,
          comment: 'Auto increment primary key',
        },
        categoryId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'Categories',
            key: 'id'
          }},
       name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        }
      ,
        type: {
          type: DataTypes.ENUM('Normal', 'VIP'),
          allowNull: false
        }  },
      {
        sequelize,
        modelName: 'Service',
      })
      CategoriesModel.hasMany(ServiceModel,{foreignKey: 'categoryId'})
      ServiceModel.belongsTo( CategoriesModel,{targetKey: 'id',foreignKey:"categoryId"})
}
