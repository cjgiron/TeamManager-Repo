const { Athlete } = require('../models/athlete.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createAthlete = (request, response) => {
    console.log(request.body)
    const { name, position } = request.body;
    Athlete.create({
        name,
        position
    })
        .then(athlete => response.json(athlete))
        .catch(err => response.json(err));
}

module.exports.getAll = (request, response) => {
    console.log("getAll method executed.")

    Athlete.find()
        .then((athletes) => {
            response.json(athletes);
        })
        .catch((err) => {
            response.status(400).json(err);
        })
}

module.exports.getAthlete = (request, response) => {
    console.log('getAthlete method executed');

    Athlete.findById( request.params.id )
        .then(athlete => {
            response.json(athlete)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.updateAthlete = (request, response) => {
    console.log('updateAthlete method executed.')

    Athlete.findOneAndUpdate({ _id: request.params.id }, request.body, {new:true})
        .then(updatedAthlete => response.json(updatedAthlete))
        .catch(err => response.json(err))
}

module.exports.deleteAthlete = (request, response) => {
    Athlete.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updateStatus = (req, res) => {
    Athlete.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(athlete => res.json(athlete))
    .catch(err => res.status(400).json(err));
}