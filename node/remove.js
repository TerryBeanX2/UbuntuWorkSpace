var mongoose = require('mongoose');

require('./model');

var Team = mongoose.model('H5Team');

Team.findOne({name:'JS team'},function(err,doc){
    if(err){
        console.log('err:',err);
        return;
    }
    if(doc){
        doc.remove();
    }
});