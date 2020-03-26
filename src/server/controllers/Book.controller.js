import TController from './TController';
import BookService from '../services/Book.service';
import Book from '../../data/models/Book';


// Asignación de la dependencia
const _bookService = new BookService(Book);
//----------------------------


class BookController extends TController {
   constructor(service) {
      super(service);
      // this._service = service;
      // this.getAll = this.getAll.bind(this);
   }
}

export default new BookController(_bookService);
