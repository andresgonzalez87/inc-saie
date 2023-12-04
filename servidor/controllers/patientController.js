const Patient = require("../models/Patient");


exports.patientController = {

    createPatient: async (req, res) => {
      try {
        let patient;
        //creamos el paciente
        patient = Patient(req.body);
        await patient.save();
        res.send(patient);

        
      } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
      }
    },

    getPatients: async (req,res) => {
      try {
        const patients = await Patient.find();
        res.json(patients)
      } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
      }
    },

    updatePatient: async (req,res) => {
      try {
        const { name, age, socialWork, diagnosis, contact, professional, service, school, schoolAddress, schoolContact, teacher, teacherContact } = req.body;
        let patient = await Patient.findById(req.params.id);
        if (!patient) {
          res.status(404).json({msg: 'No existe el paciente'})
        }
        patient.name = name;
        patient.age = age;
        patient.socialWork = socialWork;
        patient.diagnosis = diagnosis;
        patient.contact = contact;
        patient.professional = professional;
        patient.service = service;
        patient.school = school;
        patient.schoolAddress = schoolAddress;
        patient.schoolContact = schoolContact;
        patient.teacher = teacher;
        patient.teacherContact = teacherContact;

        patient = await Patient.findOneAndUpdate({_id: req.params.id}, patient, {new: true});
        res.json(patient);
        
      } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
      }
    },

    getPatient: async (req,res) => {
      try {
        let patient = await Patient.findById(req.params.id);
        if (!patient) {
          res.status(404).json({msg: 'No existe el paciente'})
        }
        res.json(patient);
      } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
      }
    },

    deletePatient: async (req,res) => {
      try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
          return res.status(404).json({msg: 'No existe el paciente'})
        }
        // await Patient.findOneAndDelete({_id: req.params.id});
        await Patient.deleteOne();
        res.json({msg: 'Paciente eliminado correctamente'});
      } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
      }
    },

  };
