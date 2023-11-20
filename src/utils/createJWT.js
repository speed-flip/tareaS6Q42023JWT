import jwt from 'jsonwebtoken';
import config from '../config/environment.js';

function generateJWT(user) {
  return jwt.sign({
    username: user.username,
    userId: user.id,
    email: user.email,
  }, config.JWT_SECRET, {
    expiresIn: 60 * 60,
  });
}

export default generateJWT