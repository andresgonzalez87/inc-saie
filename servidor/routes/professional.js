// rutas para profesional

const express = require('express');
const router = express.Router();
const { professionalController } = require('../controllers/professionalControllers');

// api/profesionales
router.post('/', professionalController.createProfessional);
router.get('/', professionalController.getProfssionals);
router.put('/:id', professionalController.updateProfessional);
router.get('/:id', professionalController.getProfessional);
router.delete('/:id', professionalController.deleteProfessional);


module.exports = router;