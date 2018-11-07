// Import in our db models
const db = require('../models');

module.exports = function(app) {


  app.get('/api/users', function(req, res) {
    db.userInfo.findAll({}).then(function(rows) {
    
      res.json(rows);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });


  app.post('/', function(req, res) {
    db.userInfo.create(req.body).then(function(rows) {
      console.log(req.body);
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error })
    });
  });


  app.get('/api/users/:id', function(req, res) {
    db.userInfo.find({ where: { id: req.params.id }})
      .then(function(data){
        res.json(data);
      }).catch(function(error) {
        res.json({ error: error });
      });
  });


  app.put('/api/users/:id', function(req, res) {
    db.userInfo.update(
      req.body,
      { where: { id: req.params.id } }
    ).then(function() {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  app.delete('/api/users/:id', function(req, res) {
    db.userInfo.destroy({ 
      where: { id: req.params.id } 
    }).then(function() {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

}
