import db from '../../database/conection.js';


export async function signup(req, res) {
  const params = [
    req.body.name,
    req.body.username,
    req.body.email,
    req.body.password,
  ];

  const sql = `
    INSERT INTO usuarios (nombre, username, email, password)
    VALUES ($1, $2, $3, $4) returning *
  `;

  try {
    await db.query(sql, params);

    res.json({
      msg: 'Usuario creado correctamente',
    });

  } catch (error) {
    console.log(error);
    res.json(error);
  }
}
