import startupDebbuger from 'debug';
import app from './app';

const debbuger = startupDebbuger('Application');
const port = process.env.PORT || 4000;

async function main() {
  await app.listen(port, () => debbuger(`Listening on port ${port} \nEnvironment: ${process.env.NODE_ENV}`));
}

main();
