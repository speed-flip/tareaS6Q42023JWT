import express from 'express';

const app = express();

app.listen(4000, () => console.log(`Server working on port: ${process.env.PORT ?? 3000}`));
