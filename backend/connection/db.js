const mysql = require("mysql2");
const db_config = require("../config/db.config");

var connection;
function handleDisconnect() {
    connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.
  
    connection.connect(function(err) {              // The server is either down
      if(err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000);                                               
      }    
      /*
          We introduce a delay before attempting to reconnect,
          to avoid a hot loop, and to allow our node script to
          process asynchronous requests in the meantime.
          If you're also serving http, display a 503 error.
      */                                                                            
      global.db = connection;
      console.log(`Connected to database ${db_config.host} >> ${db_config.database}`);    
    });                                                                                   
                                            
    
    /*
      Connection to the MySQL server is usually
      lost due to either server restart, or a
      connnection idle timeout (the wait_timeout
      server variable configures this)
    */
    connection.on('error', function(err) {
      console.log('db error', err);
      handleDisconnect();    
    });
  }
  
  handleDisconnect();

module.exports = connection;