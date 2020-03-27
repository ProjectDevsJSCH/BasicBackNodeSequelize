import TService from './T.service';

class AuthorService extends TService {
   constructor(Model) {
      super(Model);
      this._model = Model;
      this.update = this.update.bind(this);
   }

   async update(element, id) {
      try {
         const result = await this._model.update(
            element, {
               where: {
                  id_author: id,
               },
            },
         );
         return {
            success: true,
            statusCode: 200,
            data: result,
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

export default AuthorService;
