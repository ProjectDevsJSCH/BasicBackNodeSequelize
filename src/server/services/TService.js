class TService {
   constructor(Model) {
      this._model = Model;
      this.getAll = this.getAll.bind(this);
      // this.getById = this.getById.bind(this);
      // this.insert = this.insert.bind(this);
      // this.delete = this.deletebind(this);
   }

   async getAll() {
      try {
         const elements = await this._model.findAll();
         return {
            success: true,
            statusCode: 200,
            data: elements,
         };
      } catch (error) {
         return {
            success: false,
            statusCode: 500,
            error,
         };
      }
   }
}

export default TService;
