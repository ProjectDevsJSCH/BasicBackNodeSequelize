import Sequelize from 'sequelize';
import sequelizeContext from '../utils/dbConnection';

const Author = sequelizeContext.define('authors', {
   id_author: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
   },
   author_name: {
      type: Sequelize.STRING,
      allowNull: false,
   },
}, {
   timestamps: true,
   updatedAt: 'updated_at',
   createdAt: 'created_at',
});

export default Author;
