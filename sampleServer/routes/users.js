var express = require('express');
var router  = express.Router();
var pg      = require('pg');

// Set config to connect to database
router.post('/', function(req, res, next) {
    var conString = "pg://postgres:34EZfuck@localhost:5433/sampleApp";
    var client = new pg.Client(conString);
    client.connect();
    client.query("insert into personalinfo values($1, $2,$3);", [req.body.Name, req.body.DOB, req.body.Address]);
    client.query("insert into otherinfo values($1, $2,$3);", [req.body.Name, req.body.Gender, req.body.Education]);
    var query = client.query("select personalinfo.name,dateofbirth,address,gender,education from personalinfo,otherinfo where personalinfo.name=otherinfo.name;");
    query.on("row", function(row, result) {
        result.addRow(row);
    });
    query.on("end", function(result) {
        res.send(JSON.stringify(result.rows));
        client.end();
    });
});

module.exports = router;
