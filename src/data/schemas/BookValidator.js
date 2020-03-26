import Joi from '@hapi/joi';

class BookValidation {
   validateBookUpdate(book) {
      const schema = Joi.object({
         book_name: Joi.string().required().max(50),
         fk_id_author: Joi.number().required(),
      });
      return schema.validate(book);
   }

   validateBookCreation(book) {
      const schema = Joi.object({
         book_name: Joi.string().max(50),
         fk_id_author: Joi.number(),
      });
      return schema.validate(book);
   }
}

export default BookValidation;
