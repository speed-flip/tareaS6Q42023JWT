import express from 'express';
import config from './src/config/environment.js';
import { conectDB } from './src/database/conection.js';

const app = express();

//conectar a base de datos
conectDB();

const PORT = config.PORT;

app.listen(4000, () => console.log(`Server working on port: ${PORT}`));
