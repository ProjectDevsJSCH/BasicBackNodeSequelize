import startupDebbuger from 'debug';
import TController from './T.Controller';
import AuthorService from '../services/Author.service';
import Author from '../../data/models/Author';
import AuthorValidator from '../../data/schemas/Author.schema';

const debugError = startupDebbuger('app:error');

// Asignación de las dependencias
const _authorService = new AuthorService(Author);
//----------------------------


class AuthorController extends TController {
   constructor(service, validator) {
      super(service, validator);
      this._service = service;
      this._validator = validator;
      this.update = this.update.bind(this);
   }

   async update(req, res) {
      try {
         const validBody = this.validate(req, this._validator.validateUpdate);
         const response = await this._service.update(validBody, req.params.id);
         return res.status(response.statusCode).send(response);
      } catch (error) {
         debugError(error);
         return res.status(400).send(error.details[0].message);
      }
   }
}

export default new AuthorController(_authorService, AuthorValidator);
