import '@babel/polyfill';

class TController {
   constructor(service, validator) {
      this._service = service;
      this._validator = validator;
      this.validate = this.validate.bind(this);
      this.getAll = this.getAll.bind(this);
      // this.getById = this.getById.bind(this);
      // this.insert = this.insert.bind(this);
      // this.delete = this.delete.bind(this);
   }

   validate(req, res, validationFunction) {
      const { error } = validationFunction(req.body);
      return error ? res.status(400).send(error.details[0].message) : req.body;
   }

   async getAll(req, res) {
      return res.status(200).send(await this._service.getAll());
   }

   // async getById(req, res) {
   // }

   // async insert(req, res) {

   // }

   // async delete(req, res) {

   // }
}

export default TController;
