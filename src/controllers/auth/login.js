import db from '../../database/conection.js';
import generateJWT from '../../utils/createJWT.js';


export async function login(req, res) {
  const params = [
    req.body.username,
    req.body.password,
  ];

  const sql = `SELECT id, nombre, username, email, is_active FROM usuarios WHERE username = $1`;

  try {
    const result = await db.query(sql, params);

    if (result.length < 1) {
      res.json({
        msg: `El usuario \`${params[0]}\` no esta registrado`,
      });
    } else {
      // TODO: generar el token y validar password
      const token = generateJWT(result[0]);
      res.json({
        msg: 'Inicio de sesión exitoso',
        token,
      });
    }

  } catch (error) {
    console.log(error);
    res.json({
      msg: error.message,
    })
  }

}
