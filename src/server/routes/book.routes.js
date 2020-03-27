import { Router } from 'express';
import BookController from '../controllers/Book.controller';

const router = Router();

/**
 * Obtener todos los libros
 */
router.get('/allBooks', BookController.getAll);
/**
 * Crear un nuevo libro
 */
router.post('/', BookController.insert);

export default router;
