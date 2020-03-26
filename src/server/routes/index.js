
import bookRoutes from './book.routes';
import authorRoutes from './author.routes';

function addServer(server) {
   // Configuracion de las apis
   server.use('/api/books', bookRoutes);
   server.use('/api/authors', authorRoutes);
}

export default addServer;
