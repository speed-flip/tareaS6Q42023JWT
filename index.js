import express from 'express';
import config from './src/config/environment.js';
import { conectDB } from './src/database/conection.js';
import authRoutes from './src/routes/authRoutes.js';

const app = express();

// middleware
app.use(express.json());

//conectar a base de datos
conectDB();

//routes
app.use('/api/auth', authRoutes);

const PORT = config.PORT;
app.listen(4000, () => console.log(`Server working on port: ${PORT}`));
