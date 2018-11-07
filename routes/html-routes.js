const path = require('path');
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/users', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/api.html'));
  });

};
