import express, { Application } from 'express';
import cors from 'cors';
const app: Application = express();
import globalErrorHandler from './app/middlewares/globalErrorHanlder';
import routes from './app/routes';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application Route
app.use('/api/v1', routes);

//Global Error Handler
app.use(globalErrorHandler);

export default app;
