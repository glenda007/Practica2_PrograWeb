import Usuario from '../models/usuario.model.js'
import { issueAccessToken } from '../helpers/auth.helper.js'

const login = async (data) => {
  const usuarioValido = await Usuario.findOne({
  email: data.email,
  password: data.password
  });

  if (!usuarioValido) {
    const error = new Error('Credenciales invalidas');
    error.code = 'AUTH_ERROR';
    throw error;
  }

  const token = await issueAccessToken({
    sub: usuarioValido._id,
    role: usuarioValido.role
  });

  return {
    token: token,
    role: usuarioValido.role
  };
}

export {
  login,
};