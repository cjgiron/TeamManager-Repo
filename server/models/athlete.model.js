const mongoose = require('mongoose');
const AthleteSchema = new mongoose.Schema({
    name: { type: String },
    position: { type: String },
    game: {
        type: [Number],
        default: [0, 0, 0]  // set all 3 game's initial status to 'undecided'
    }
}, { timestamps: true });
module.exports.Athlete = mongoose.model('Athlete', AthleteSchema);