import Sequelize from 'sequelize';
import sequelizeContext from '../utils/dbConnection';
import Author from './Author';

const Book = sequelizeContext.define('books', {
   id_book: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
   },
   book_name: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   fk_id_author: {
      type: Sequelize.INTEGER,
      references: {
         model: Author,
         key: 'id_author',
      },
   },
}, {
   timestamps: true,
   updatedAt: 'updated_at',
   createdAt: 'created_at',
   getterMethods: {
      name() {
         return this.bookName;
      },
   },
   setterMethods: {
      name(value) {
         this.setDataValue('book_name', value);
      },
   },
});

Author.hasMany(Book, { foreignKey: 'fk_id_author', sourceKey: 'id_author' });
Book.belongsTo(Author, { foreignKey: 'fk_id_author', targetKey: 'id_author' });

export default Book;
