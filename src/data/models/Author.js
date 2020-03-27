import Sequelize from 'sequelize';
import sequelizeContext from '../utils/DbConnection';

const Author = sequelizeContext.define('authors', {
   id_author: {
      // Añadir las validaciones del modelo
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
   },
   author_name: {
      // Añadir las validaciones del modelo
      type: Sequelize.STRING,
      allowNull: false,
   },
}, {
   timestamps: true,
   updatedAt: 'updated_at',
   createdAt: 'created_at',
});

export default Author;
