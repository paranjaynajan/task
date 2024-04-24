import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";
import { ServiceModel } from "./service_model";
export class ServiceOptionsModel extends Model {
    public id!: string;
    public serviceId!:string;
    public duration!: string;
    public price!: number;
    public type!: string[];
  }
  
export const initServiceOptionsModel=(sequelize:Sequelize):void=>{
  ServiceOptionsModel.init({
        id: {
          type: DataTypes.UUID,
          primaryKey: true, 
          defaultValue:UUIDV4,
          comment: 'Auto increment primary key',
        },
        serviceId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'Services',
            key: 'id'
          }},
        duration: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
        } , 
        type: {
          type: DataTypes.ENUM('Hourly', 'Weekly', 'Monthly'),
          allowNull: false
        }      
      },
      {
        sequelize,
        modelName: 'ServiceOptions',
      })
      ServiceModel.hasMany(ServiceOptionsModel,{foreignKey: 'serviceId'})
      ServiceOptionsModel.belongsTo( ServiceModel,{targetKey: 'id',foreignKey:"serviceId"})    
}