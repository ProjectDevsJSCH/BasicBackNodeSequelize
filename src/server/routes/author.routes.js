import { Router } from 'express';
import AuthorController from '../controllers/Author.controller';

const router = Router();

/**
 * Obtener todos los autores
 */
router.get('/allAuthors', AuthorController.getAll);
/**
 * Crear un nuevo autor
 */
router.post('/', AuthorController.insert);
/**
 * Actualizar un autor
 */
router.patch('/:id', AuthorController.update);

export default router;
