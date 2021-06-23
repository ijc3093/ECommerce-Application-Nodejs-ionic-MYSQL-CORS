// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
// //This is for nodejs only that connected from mysql
module.exports = {
    host: 'localhost',
    user: 'root', // your database username
    password: 'Merciful$100', // your database password
    database: 'honor_flight',  // FYI export the heroku_e742caad00cb973 to this database
    multipleStatements: true
};