const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    socialWork: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    professional: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    schoolAddress: {
        type: String,
        required: true
    },
    schoolContact: {
        type: Number,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    teacherContact: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Patient', PatientSchema);