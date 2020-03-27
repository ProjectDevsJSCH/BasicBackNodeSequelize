import Joi from '@hapi/joi';

class AuthorValidation {
   static validateCreation(author) {
      const schema = Joi.object({
         author_name: Joi.string().required().max(50),
      });
      return schema.validate(author);
   }

   static validateUpdate(author) {
      const schema = Joi.object({
         author_name: Joi.string().max(50),
      });
      return schema.validate(author);
   }
}

export default AuthorValidation;
