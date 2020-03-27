import TController from './T.Controller';
import BookService from '../services/Book.service';
import Book from '../../data/models/Book';
import BookValidator from '../../data/schemas/Book.schema';


// Asignación de la dependencia
const _bookService = new BookService(Book);
//----------------------------


class BookController extends TController {
   constructor(service, validator) {
      super(service, validator);
      // this._service = service;
      // this._validator = validator;
      // this.getAll = this.getAll.bind(this);
   }
}

export default new BookController(_bookService, BookValidator);
