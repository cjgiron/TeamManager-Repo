const AthleteController = require('../controllers/athlete.controller');

module.exports = function(app){
    app.get('/api', AthleteController.index);
    app.get('/api/athletes', AthleteController.getAll);
    app.post('/api/athletes', AthleteController.createAthlete);
    app.put('/api/athletes/:id', AthleteController.updateAthlete);
    app.get("/api/athletes/:id", AthleteController.getAthlete);
    app.delete('/api/athletes/:id', AthleteController.deleteAthlete);
}