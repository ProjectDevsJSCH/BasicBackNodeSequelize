import TService from './T.service';

class BookService extends TService {
   constructor(Model) {
      super(Model);
      // this._model = Model
      // this.update = this.update.bind(this);
   }
}

export default BookService;
