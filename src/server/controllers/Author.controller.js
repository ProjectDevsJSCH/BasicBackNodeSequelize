import TController from './TController';
import AuthorService from '../services/Author.service';
import Author from '../../data/models/Author';


// Asignación de la dependencia
const _authorService = new AuthorService(Author);
//----------------------------


class AuthorController extends TController {
   constructor(service) {
      super(service);
      // this._service = service;
      // this.getAll = this.getAll.bind(this);
   }
}

export default new AuthorController(_authorService);
