import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import routes from './routes'; // El archivo index se llama por defecto

const server = express();

// Middlewares
if (server.get('env') === 'development') {
   server.use(morgan('dev'));
}
server.use(json());
server.use(urlencoded({ extended: true })); // para utilizar queries en la ruta
server.use(express.static('public'));

// Routes
routes(server);

export default server;
