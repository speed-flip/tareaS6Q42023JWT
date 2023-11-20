import jwt from 'jsonwebtoken';

import config from '../config/environment.js';

const checkAuth = async (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET);
      req.user = decoded;

      return next();
    } catch (error) {
      console.log(error);
    }
  }

  if (!token) {
    const error = new Error('No hay token en headers');
    return res.status(404).json({ msg: error.message });
  }
}

export default checkAuth;