import db from "../database/conection.js";

export async function getProducts(_, res) {

  const sql = 'SELECT * FROM productos';

  try {
    const productos = await db.query(sql);
    res.json({
      msg: 'Consulta hecha exitosamente',
      productos,
    });

  } catch (error) {
    console.log(error);
    res.json({
      msg: error.message,
    });
  }
}
