// rutas para paciente

const express = require('express');
const router = express.Router();
const { patientController } = require('../controllers/patientController');

// api/pacintes
router.post('/', patientController.createPatient);
router.get('/', patientController.getPatients);
router.put('/:id', patientController.updatePatient);
router.get('/:id', patientController.getPatient);
router.delete('/:id', patientController.deletePatient);


module.exports = router;