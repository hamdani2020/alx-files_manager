import startServer from './libs/boot';
import express from 'express';
import injectRoutes from './routes';
import injectMiddlewares from './libs/middlewares';

const server = express();

injectMiddlewares(server);
injectRoutes(server);
startServer(server);

export default server;
