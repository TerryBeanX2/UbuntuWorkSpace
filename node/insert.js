var mongoose = require('mongoose');
require('./model');

var Team = mongoose.model('H5Team');

var team = new Team({
    name:"JS team",
    count:666,
    activeTime:new Date()
});

team.save(function(err){
    console.log('save status:',err?'failed':'success');
});