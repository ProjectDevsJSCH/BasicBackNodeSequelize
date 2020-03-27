import Joi from '@hapi/joi';

class BookValidation {
   static validateCreation(book) {
      const schema = Joi.object({
         book_name: Joi.string().required().max(50),
         fk_id_author: Joi.number().required(),
      });
      return schema.validate(book);
   }

   static validateUpdate(book) {
      const schema = Joi.object({
         book_name: Joi.string().max(50),
         fk_id_author: Joi.number(),
      });
      return schema.validate(book);
   }
}

export default BookValidation;
