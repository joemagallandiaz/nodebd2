const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '192.241.144.140',
    user: 'root',
    password: '123456Jmd',
    database: 'spotifydb'
  });
}
