const express = require('express');
const tourController = require('./../controllers/tourController');
/*3) ROUTERS */

const router = express.Router();

router.param('id', tourController.checkId);
// Definir rutas para obtener todos los tours y crear un nuevo tour
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

// Definir rutas para obtener, actualizar
//y eliminar un tour por su ID
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
