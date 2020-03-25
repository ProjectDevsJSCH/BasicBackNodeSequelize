import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json);
app.use(urlencoded({ extended: true })); // para utilizar queries en la ruta

// Routes

export default app;
