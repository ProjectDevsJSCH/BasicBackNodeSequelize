import { Router } from 'express';
import {
  getAllBooks,
} from '../../controllers/book/book.controller';

const router = Router();


router.get('/allBooks', getAllBooks);

export default router;
