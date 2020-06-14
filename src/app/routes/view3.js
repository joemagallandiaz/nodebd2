const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/view3', (req, res) => {
    connection.query('SELECT * FROM spotifydb.Canciones_favoritas_De_Usuarios', (err, result) => {
      res.render('views/view3', {
        view3: result
      });
    });
  });

};
