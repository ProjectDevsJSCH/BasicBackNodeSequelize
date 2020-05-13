class TService {
   constructor(model) {
      this._model = model;
      this.getAll = this.getAll.bind(this);
      this.insert = this.insert.bind(this);
      // this.getById = this.getById.bind(this);
      // this.delete = this.deletebind(this);
   }

   getAll() {
      return this._model.findAll();
   }

   insert(element, t = null) {
      return this._model.create(element, {transaction: t});
   }
}

export default TService;
