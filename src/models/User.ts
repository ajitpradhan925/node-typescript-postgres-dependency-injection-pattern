import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/sequelize';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;

  // Add other properties as needed

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    // Add other properties as needed
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);

export { User };