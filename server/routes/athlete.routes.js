const AthleteController = require('../controllers/athlete.controller');

module.exports = function(app){
    app.get('/api', AthleteController.index);
    app.post('/api/athletes', AthleteController.createAthlete);
}