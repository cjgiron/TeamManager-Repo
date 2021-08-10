const mongoose = require('mongoose');
const AthleteSchema = new mongoose.Schema({
    name: { type: String },
    position: { type: String }
}, { timestamps: true });
module.exports.Athlete = mongoose.model('Athlete', AthleteSchema);