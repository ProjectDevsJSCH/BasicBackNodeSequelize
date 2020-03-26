import Sequielize from 'sequelize';
import config from 'config';
import startupDebbuger from 'debug';

const debug = startupDebbuger('Application');

let loggingEnv;

if (process.env.NODE_ENV === 'production') {
   loggingEnv = false;
} else {
   loggingEnv = true;
}


const sequelizeContext = new Sequielize(
   config.get('db.name'),
   config.get('db.user'),
   config.get('db.password'), {
      host: config.get('db.host'),
      port: config.get('db.port'),
      dialect: 'postgres',
      dialectOptions: {
      // ssl: true, // para despliegues
      },
      logging: loggingEnv,
      freezeTableName: true, // para que no pluralice las tablas
   },
);


if (process.env.NODE_ENV === 'production') {
   sequelizeContext
      .authenticate()
      .then(() => {
         debug('Connection has been established successfully.');
      })
      .catch((err) => {
         debug('Unable to connect to the database:', err);
      });

   sequelizeContext.sync().then(() => {
      debug('Sync made');
   }).catch((error) => {
      debug(error);
   });
}

export default sequelizeContext;
