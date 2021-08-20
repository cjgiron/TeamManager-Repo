const AthleteController = require('../controllers/athlete.controller');

module.exports = function(app){
    app.get('/api', AthleteController.index);
    app.get('/api/athletes', AthleteController.getAll);
    app.post('/api/athletes', AthleteController.createAthlete);
    app.put('/api/athletes/:id', AthleteController.updateAthlete);
    app.get("/api/athletes/:id", AthleteController.getAthlete);
    app.put('/api/athlete/:id/status', AthleteController.updateStatus);
    app.delete('/api/athletes/:id', AthleteController.deleteAthlete);
}