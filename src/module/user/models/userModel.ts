import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";
export class UserModel extends Model {
    public id!: string;
    public email!: string;

    public password!: string;
  }
export const initUserModel=(sequelize:Sequelize):void=>{
    UserModel.init({
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue:UUIDV4,
          comment: 'Auto increment primary key',
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        }  
      },
      {
        sequelize,
        modelName: 'User',
      })
    
}