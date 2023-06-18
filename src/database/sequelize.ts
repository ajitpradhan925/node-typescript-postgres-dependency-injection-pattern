import databaseConfig from '../config/database';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect as 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql',
  }
);

export default sequelize;
