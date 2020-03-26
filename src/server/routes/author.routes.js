import { Router } from 'express';
import AuthorController from '../controllers/Author.controller';

const router = Router();

/**
 * Obtener todos los autores
 */
router.get('/allAuthors', AuthorController.getAll);

export default router;
