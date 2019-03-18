var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb+srv://userJohn:w1dg3ts@mydatabase-fboxm.mongodb.net/test?retryWrites=true', ['tasks']);

router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks)
    {
        if(err)
        {
            res.send(err);
        }
        res.json(tasks);
    });
});

module.exports = router;