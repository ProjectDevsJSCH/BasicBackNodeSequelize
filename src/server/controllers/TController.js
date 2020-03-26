import '@babel/polyfill';

class TController {
   constructor(service) {
      this._service = service;
      this.getAll = this.getAll.bind(this);
      // this.getById = this.getById.bind(this);
      // this.insert = this.insert.bind(this);
      // this.delete = this.delete.bind(this);
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
