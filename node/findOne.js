var mongoose = require('mongoose');
require('./model');
var team = mongoose.model('H5Team');
team.findOne({name:'CSS team'},function(err,docs){
    if(err){
        console.log('err:',err);
        return;
    }
    // docs.name = 'CSS team';
    // docs.save();
    console.log('findOne result:',docs);
});