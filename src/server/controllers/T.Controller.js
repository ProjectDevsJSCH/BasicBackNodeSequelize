import '@babel/polyfill';
import startupDebbuger from 'debug';

const debugError = startupDebbuger('app:error');

class TController {
   constructor(service, validator) {
      this._service = service;
      this._validator = validator;
      this.validate = this.validate.bind(this);
      this.getAll = this.getAll.bind(this);
      this.insert = this.insert.bind(this);
   }

   validate(request, validationFunction) {
      const { error } = validationFunction(request.body);
      if (error) {
         throw error;
      } else {
         return request.body;
      }
   }

   async getAll(req, res) {
      const response = await this._service.getAll();
      return res.status(response.statusCode).send(response);
   }

   async insert(req, res) {
      try {
         const validBody = this.validate(req, this._validator.validateCreation);
         const response = await this._service.insert(validBody);
         return res.status(response.statusCode).send(response);
      } catch (error) {
         debugError(error);
         return res.status(400).send(error.details[0].message);
      }
   }
}

export default TController;
