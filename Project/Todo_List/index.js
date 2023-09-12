/* const sql = require("msnodesqlv8");

const connectionString = "server=(localdb)\MSSqlLocalDb;Database=Project_Dezert.Data;Trusted_Connection=Yes;Driver={SQL Server 15.0.4153}";
const query = "SELECT name FROM sys.databases";

sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
}); */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'TONIK\barni',
        password: '30082001',
        server: 'localhost', 
        database: 'Project_Dezert.Data'
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Student', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});