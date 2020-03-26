import TController from './T.Controller';
import AuthorService from '../services/Author.service';
import Author from '../../data/models/Author';
import AuthorValidator from '../../data/schemas/AuthorValidator';


// Asignación de las dependencias
const _authorService = new AuthorService(Author);
const _authorValidator = new AuthorValidator();
//----------------------------


class AuthorController extends TController {
   constructor(service, validator) {
      super(service, validator);
      // this._service = service;
      // this._validator = validator;
      // this.getAll = this.getAll.bind(this);
   }
}

export default new AuthorController(_authorService, _authorValidator);
