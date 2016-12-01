var mongoose = require('mongoose');
require('./model');

var team = mongoose.model('H5Team');

team.find({},function(err,docs){
    if(err){
        console.log('err:',err);
        return;
    }
   console.log('result:',docs);
});