import mysql from 'mysql';

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'taskdata.cxgkmsyiki77.us-east-2.rds.amazonaws.com',      // MySQL host
  user: 'admin',                                                  // MySQL username
  password: 'TaskApp2024!',                                       // MySQL password
  database: 'userinfo'                                            // MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

export default connection;
