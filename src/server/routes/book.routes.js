import { Router } from 'express';
import BookController from '../controllers/Book.controller';

const router = Router();


router.get('/allBooks', BookController.getAll);

export default router;
