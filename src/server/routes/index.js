
import bookRoutes from './Book.routes';
import authorRoutes from './Author.routes';

function addServer(server) {
   // Configuracion de las apis
   server.use('/api/books', bookRoutes);
   server.use('/api/authors', authorRoutes);
}

export default addServer;
