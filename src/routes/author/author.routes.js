import { Router } from 'express';
import {
  getAllAuthors,
} from '../../controllers/author/author.controller';

const router = Router();

/**
 * Obtener todos los autores
 */
router.get('/allAuthors', getAllAuthors);

export default router;
