import startupDebbuger from 'debug';
import app from './server/app';

const debug = startupDebbuger('app:');
const port = process.env.PORT || 4000;

async function main() {
   await app.listen(port, () => debug(`Listening on port ${port} \nEnvironment: ${process.env.NODE_ENV}`));
}

main();
