import pg from 'pg-promise';
const pgp = pg();

import config from '../config/environment.js';

const user = config.DB_USERNAME;
const pass = config.DB_PASSWORD;
const host = config.DB_HOST;
const database = config.DB_NAME;

const conectionString = `postgresql://${user}:${pass}@${host}:5432/${database}`;

const db = pgp(conectionString);

export async function conectDB() {
  db.connect()
    .then(() => {
      console.log('Conexión exitosa a postgress');
    }
    ).catch((err) => {
      console.log(`Error de conexión a postgres ${err}`);
    });
}

export default db;