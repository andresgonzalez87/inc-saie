const mongoose = require('mongoose');

const ProfessionalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    patients: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Professional', ProfessionalSchema);