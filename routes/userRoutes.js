const express = require('express');
const userController = require('./../controllers/userController');

/*3) ROUTERS */

const router = express.Router();

// Definir rutas para obtener todos los usuarios y crear un nuevo usuario
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

// Definir rutas para obtener, actualizar
//y eliminar un usuario por su ID
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
