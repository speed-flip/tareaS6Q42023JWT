import express from 'express';
import config from './src/config/environment.js';

const app = express();

const PORT = config.PORT;

app.listen(4000, () => console.log(`Server working on port: ${PORT}`));
