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