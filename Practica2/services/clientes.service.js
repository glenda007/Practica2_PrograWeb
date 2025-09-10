import Cliente from '../models/Cliente.model.js';

const getClientes = async () => {
  const clientes = await Cliente.find();

  if (!clientes || clientes.length === 0) {
    const error = new Error('No se encontraron a los clientes');
    error.code = 'DATA_NOT_FOUND';
    throw error;
  }

  return clientes;

}

const postCliente = async (data) => {
  const clienteExistente = await Cliente.findOne({ nit: data.nit });

  if (clienteExistente) {
    const error = new Error('El cliente ya existe en la base de datos');
    error.code = 'DATA_ALREADY_EXISTS';
    throw error;
  }

  const nuevoCliente = new Cliente({
    ...data,
    email: data.email.toLowerCase()
  });

  const clienteGuarddo = await nuevoCliente.save();
  return clienteGuardado;
}

export {
  getClientes,
  postCliente
};