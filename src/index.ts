import 'reflect-metadata';
import express from 'express';
import sequelize from './database/sequelize';
import errorHandler from './middlewares/errorHandler';
import loggerMiddleware from './middlewares/loggerMiddleware';
import container from './inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';

const app = express();
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(express.json());
});

const serverInstance = server.build();
app.use('/api', serverInstance);

const port = 3000;

// Custom error handler
app.use(errorHandler);

// Custom Logegr for third party or file based log
app.use(loggerMiddleware);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database');
    await sequelize.sync({ alter: true });
    console.log('Models synchronized with the database');
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
});
